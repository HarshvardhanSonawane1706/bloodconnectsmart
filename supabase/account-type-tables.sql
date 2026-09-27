-- Run this after schema.sql in Supabase Dashboard → SQL Editor.
-- Passwords remain protected in auth.users. These public tables contain only
-- non-secret profile information for each account type.

alter table public.profiles add column if not exists participant_type text check (participant_type in ('donor', 'recipient'));

create table if not exists public.individual_accounts (
  id uuid primary key references public.profiles(id) on delete cascade,
  full_name text not null, email text not null,
  participant_type text not null check (participant_type in ('donor', 'recipient')),
  blood_group text, created_at timestamptz not null default now()
);
create table if not exists public.organization_accounts (
  id uuid primary key references public.profiles(id) on delete cascade,
  organization_name text not null, email text not null, created_at timestamptz not null default now()
);
create table if not exists public.donor_accounts (
  id uuid primary key references public.individual_accounts(id) on delete cascade,
  blood_group text, created_at timestamptz not null default now()
);
create table if not exists public.recipient_accounts (
  id uuid primary key references public.individual_accounts(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.individual_accounts enable row level security;
alter table public.organization_accounts enable row level security;
alter table public.donor_accounts enable row level security;
alter table public.recipient_accounts enable row level security;
grant select on public.individual_accounts, public.organization_accounts, public.donor_accounts, public.recipient_accounts to authenticated;

drop policy if exists "Individuals can view their own account" on public.individual_accounts;
create policy "Individuals can view their own account" on public.individual_accounts for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "Organizations can view their own account" on public.organization_accounts;
create policy "Organizations can view their own account" on public.organization_accounts for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "Donors can view their own account" on public.donor_accounts;
create policy "Donors can view their own account" on public.donor_accounts for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "Recipients can view their own account" on public.recipient_accounts;
create policy "Recipients can view their own account" on public.recipient_accounts for select to authenticated using ((select auth.uid()) = id);

create or replace function public.create_profile_for_auth_user()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  account_kind text := coalesce(new.raw_user_meta_data ->> 'account_type', new.raw_user_meta_data ->> 'role', 'individual');
  participant_kind text := coalesce(new.raw_user_meta_data ->> 'participant_type', 'donor');
  display_name text := coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1));
  organisation text := coalesce(new.raw_user_meta_data ->> 'organization_name', display_name);
  blood text := new.raw_user_meta_data ->> 'blood_group';
begin
  insert into public.profiles (id, email, full_name, account_role, participant_type)
  values (new.id, new.email, display_name, account_kind, case when account_kind = 'individual' then participant_kind else null end)
  on conflict (id) do update set email = excluded.email, full_name = excluded.full_name, account_role = excluded.account_role, participant_type = excluded.participant_type, updated_at = now();
  if account_kind = 'organization' then
    insert into public.organization_accounts (id, organization_name, email) values (new.id, organisation, new.email)
    on conflict (id) do update set organization_name = excluded.organization_name, email = excluded.email;
  else
    insert into public.individual_accounts (id, full_name, email, participant_type, blood_group) values (new.id, display_name, new.email, participant_kind, blood)
    on conflict (id) do update set full_name = excluded.full_name, email = excluded.email, participant_type = excluded.participant_type, blood_group = excluded.blood_group;
    if participant_kind = 'recipient' then
      insert into public.recipient_accounts (id) values (new.id) on conflict (id) do nothing;
    else
      insert into public.donor_accounts (id, blood_group) values (new.id, blood) on conflict (id) do update set blood_group = excluded.blood_group;
    end if;
  end if;
  return new;
end;
$$;
revoke execute on function public.create_profile_for_auth_user() from public, anon, authenticated;

-- Backfill users created before this routing trigger was installed.
insert into public.profiles (id, email, full_name, account_role, participant_type)
select u.id, u.email, coalesce(u.raw_user_meta_data ->> 'name', split_part(u.email, '@', 1)),
  coalesce(u.raw_user_meta_data ->> 'account_type', u.raw_user_meta_data ->> 'role', 'individual'),
  case when coalesce(u.raw_user_meta_data ->> 'account_type', u.raw_user_meta_data ->> 'role', 'individual') = 'individual' then coalesce(u.raw_user_meta_data ->> 'participant_type', 'donor') else null end
from auth.users u
on conflict (id) do update set email = excluded.email, full_name = excluded.full_name, account_role = excluded.account_role, participant_type = excluded.participant_type, updated_at = now();

insert into public.individual_accounts (id, full_name, email, participant_type, blood_group)
select p.id, p.full_name, p.email, coalesce(p.participant_type, 'donor'), u.raw_user_meta_data ->> 'blood_group'
from public.profiles p join auth.users u on u.id = p.id where p.account_role = 'individual'
on conflict (id) do update set full_name = excluded.full_name, email = excluded.email, participant_type = excluded.participant_type, blood_group = excluded.blood_group;

insert into public.organization_accounts (id, organization_name, email)
select p.id, coalesce(u.raw_user_meta_data ->> 'organization_name', p.full_name), p.email
from public.profiles p join auth.users u on u.id = p.id where p.account_role = 'organization'
on conflict (id) do update set organization_name = excluded.organization_name, email = excluded.email;

insert into public.donor_accounts (id, blood_group)
select i.id, i.blood_group from public.individual_accounts i where i.participant_type = 'donor'
on conflict (id) do update set blood_group = excluded.blood_group;
insert into public.recipient_accounts (id)
select i.id from public.individual_accounts i where i.participant_type = 'recipient'
on conflict (id) do nothing;

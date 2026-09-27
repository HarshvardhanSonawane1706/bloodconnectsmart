-- Run this first if schema.sql reports: column "user_id" does not exist.
-- It upgrades the earlier camp_registrations table without deleting existing rows.

alter table public.camp_registrations
  add column if not exists user_id uuid references auth.users(id) on delete cascade;

-- Old anonymous registrations cannot safely be assigned to an account, so their
-- user_id remains NULL. New registrations must match the logged-in user.
alter table public.camp_registrations enable row level security;
grant select, insert on table public.camp_registrations to authenticated;

drop policy if exists "Users can create their own registrations" on public.camp_registrations;
create policy "Users can create their own registrations"
on public.camp_registrations for insert to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can view their own registrations" on public.camp_registrations;
create policy "Users can view their own registrations"
on public.camp_registrations for select to authenticated
using ((select auth.uid()) = user_id);

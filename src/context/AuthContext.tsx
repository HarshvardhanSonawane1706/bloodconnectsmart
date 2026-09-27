import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { getSupabaseClient } from '../lib/supabase';
import type { ConsentSettings, Registration, UserProfile, UserRole, UserType } from '../types';

type ParticipantType = 'donor' | 'recipient';

interface SignUpDetails {
  email: string;
  password: string;
  name: string;
  accountType: UserRole;
  participantType?: ParticipantType;
  bloodGroup?: string;
  organizationName?: string;
}

interface AuthContextValue {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  consentSettings: ConsentSettings;
  myRegistrations: Registration[];
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (details: SignUpDetails) => Promise<string | null>;
  logout: () => Promise<void>;
  switchRole: (role: UserRole) => Promise<void>;
  updateConsent: (updates: Partial<ConsentSettings>) => void;
  addRegistration: (reg: Registration) => void;
  updateRegistrationStatus: (ticketId: string, status: Registration['status']) => void;
}

const defaultConsent: ConsentSettings = { emergencyAlerts: true, whatsappNotifications: true, smsAlerts: false, futureDriveParticipation: true, shareContactWithOrganizers: true, updatedAt: new Date().toISOString() };
const AuthContext = createContext<AuthContextValue | null>(null);

function profileFromAuthUser(authUser: User): UserProfile {
  const metadata = authUser.user_metadata ?? {};
  const role: UserRole = metadata.account_type === 'organization' || metadata.role === 'organization' ? 'organization' : 'individual';
  const participantType: UserType = metadata.participant_type === 'recipient' || metadata.user_type === 'receiver' ? 'receiver' : 'donor';

  return {
    id: authUser.id,
    name: typeof metadata.name === 'string' ? metadata.name : authUser.email?.split('@')[0] ?? 'Member',
    email: authUser.email ?? '', phone: typeof metadata.phone === 'string' ? metadata.phone : '', role,
    userType: role === 'organization' ? 'ngo' : participantType,
    bloodGroup: typeof metadata.blood_group === 'string' ? metadata.blood_group : '',
    location: typeof metadata.location === 'string' ? metadata.location : '', city: typeof metadata.city === 'string' ? metadata.city : '',
    donationCount: 0, isAvailableForEmergency: false, preferredLanguage: 'en',
    organizationName: typeof metadata.organization_name === 'string' ? metadata.organization_name : undefined,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>(defaultConsent);
  const [myRegistrations, setMyRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const supabase = getSupabaseClient();
    let active = true;
    supabase.auth.getSession().then(({ data: { session } }) => { if (active) { setUser(session?.user ? profileFromAuthUser(session.user) : null); setIsLoading(false); } });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => { if (active) { setUser(session?.user ? profileFromAuthUser(session.user) : null); setIsLoading(false); } });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await getSupabaseClient().auth.signInWithPassword({ email, password });
    return error?.message ?? null;
  }, []);

  const signUp = useCallback(async ({ email, password, name, accountType, participantType, bloodGroup, organizationName }: SignUpDetails) => {
    const { error } = await getSupabaseClient().auth.signUp({
      email, password,
      options: { data: { name, account_type: accountType, participant_type: accountType === 'individual' ? participantType ?? 'donor' : null, blood_group: bloodGroup ?? '', organization_name: organizationName ?? '' } },
    });
    return error?.message ?? null;
  }, []);

  const logout = useCallback(async () => { await getSupabaseClient().auth.signOut(); }, []);
  const switchRole = useCallback(async (role: UserRole) => { const { data } = await getSupabaseClient().auth.updateUser({ data: { account_type: role } }); if (data.user) setUser(profileFromAuthUser(data.user)); }, []);
  const updateConsent = useCallback((updates: Partial<ConsentSettings>) => setConsentSettings(previous => ({ ...previous, ...updates, updatedAt: new Date().toISOString() })), []);
  const addRegistration = useCallback((registration: Registration) => setMyRegistrations(previous => [registration, ...previous]), []);
  const updateRegistrationStatus = useCallback((ticketId: string, status: Registration['status']) => setMyRegistrations(previous => previous.map(registration => registration.id === ticketId ? { ...registration, status } : registration)), []);

  return <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), isLoading, consentSettings, myRegistrations, signIn, signUp, logout, switchRole, updateConsent, addRegistration, updateRegistrationStatus }}>{children}</AuthContext.Provider>;
}

export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error('useAuth must be used within AuthProvider'); return context; }

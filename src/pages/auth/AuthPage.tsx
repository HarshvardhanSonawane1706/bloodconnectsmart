import React, { FormEvent, useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input, Select } from '../../components/ui/Input';
import type { UserRole } from '../../types';

export function AuthPage() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [name, setName] = useState('');
  const [accountType, setAccountType] = useState<UserRole>('individual'); const [participantType, setParticipantType] = useState<'donor' | 'recipient'>('donor');
  const [bloodGroup, setBloodGroup] = useState(''); const [organizationName, setOrganizationName] = useState('');
  const [error, setError] = useState(''); const [notice, setNotice] = useState(''); const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setLoading(true);
    const result = mode === 'signin' ? await signIn(email, password) : await signUp({ email, password, name, accountType, participantType, bloodGroup, organizationName });
    setLoading(false);
    if (result) setError(result); else if (mode === 'signup') setNotice('Account saved. Confirm your email if confirmation is enabled.');
  };

  return <main className="min-h-screen grid place-items-center p-6 bg-[var(--bg)] text-[var(--text)]"><section className="w-full max-w-md glass-card p-7 sm:p-9"><div className="mb-7"><p className="text-xs font-bold tracking-[0.18em] text-[var(--blue)]">BLOOD CONNECT</p><h1 className="mt-2 text-3xl font-extrabold">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h1><p className="mt-2 text-sm text-[var(--muted)]">Secure access for donors, recipients, and organisations.</p></div><form className="space-y-4" onSubmit={submit}>{mode === 'signup' && <><Input label="Full name" value={name} onChange={event => setName(event.target.value)} required /><Select label="Account type" value={accountType} onChange={event => setAccountType(event.target.value as UserRole)} options={[{ value: 'individual', label: 'Individual' }, { value: 'organization', label: 'Organisation' }]} />{accountType === 'individual' ? <><Select label="I am registering as" value={participantType} onChange={event => setParticipantType(event.target.value as 'donor' | 'recipient')} options={[{ value: 'donor', label: 'Donor' }, { value: 'recipient', label: 'Recipient' }]} /><Select label="Blood group" value={bloodGroup} onChange={event => setBloodGroup(event.target.value)} options={[{ value: '', label: 'Prefer not to say' }, ...['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(value => ({ value, label: value }))]} /></> : <Input label="Organisation name" value={organizationName} onChange={event => setOrganizationName(event.target.value)} required />}</>}<Input label="Email address" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required /><Input label="Password" type="password" autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} minLength={6} value={password} onChange={event => setPassword(event.target.value)} required />{error && <p role="alert" className="text-sm text-[var(--red)]">{error}</p>}{notice && <p className="text-sm text-[var(--green)]">{notice}</p>}<Button type="submit" wide loading={loading} icon={mode === 'signin' ? <LogIn size={16} /> : <UserPlus size={16} />}>{mode === 'signin' ? 'Sign in' : 'Create account'}</Button></form><p className="mt-6 text-center text-sm text-[var(--muted)]">{mode === 'signin' ? 'New to Blood Connect?' : 'Already have an account?'} <button type="button" className="font-semibold text-[var(--blue)]" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setNotice(''); }}>{mode === 'signin' ? 'Create an account' : 'Sign in'}</button></p></section></main>;
}

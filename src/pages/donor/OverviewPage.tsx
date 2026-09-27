import React from 'react';
import { HeartPulse, Search, Siren } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';

export function OverviewPage({ onNavigate }: { onNavigate: (section: string) => void }) {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <section className="glass-card p-6 sm:p-8">
        <p className="text-sm font-semibold text-[var(--blue)]">DONOR DASHBOARD</p>
        <h1 className="mt-2 text-3xl font-extrabold">Welcome, {user?.name}</h1>
        <p className="mt-2 text-[var(--muted)]">Your account is securely connected to Blood Connect.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Find a camp" icon={<Search size={20} />}><Button wide onClick={() => onNavigate('camps')}>Explore camps</Button></Card>
        <Card title="Emergency requests" icon={<Siren size={20} />}><Button wide variant="outline" onClick={() => onNavigate('emergency')}>View requests</Button></Card>
        <Card title="My donor space" icon={<HeartPulse size={20} />}><Button wide variant="secondary" onClick={() => onNavigate('donor')}>Open profile</Button></Card>
      </div>
    </div>
  );
}

import React from 'react';
import { Building2 } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function OrganizationDashboardPage({ onNavigate }: { onNavigate: (section: string) => void }) {
  return <div className="space-y-5"><div><p className="text-sm font-semibold text-[var(--blue)]">ORGANISATION</p><h1 className="text-3xl font-extrabold">Organisation dashboard</h1></div><Card title="Manage your blood drives" icon={<Building2 size={20} />}><Button onClick={() => onNavigate('camps')}>View camps</Button></Card></div>;
}

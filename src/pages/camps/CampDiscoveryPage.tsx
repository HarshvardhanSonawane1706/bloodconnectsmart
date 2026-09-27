import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { initialCamps } from '../../data/mockData';
import { Card } from '../../components/ui/Card';

export function CampDiscoveryPage() {
  return (
    <div className="space-y-5">
      <div><p className="text-sm font-semibold text-[var(--blue)]">CAMPS</p><h1 className="text-3xl font-extrabold">Find a donation camp</h1></div>
      <div className="grid gap-4 md:grid-cols-2">
        {initialCamps.map(camp => <Card key={camp.id} title={camp.name}>
          <div className="space-y-2 text-sm text-[var(--muted)]">
            <p className="flex gap-2"><MapPin size={16} />{camp.venue}, {camp.city}</p>
            <p className="flex gap-2"><CalendarDays size={16} />{camp.date} · {camp.time}</p>
          </div>
        </Card>)}
      </div>
    </div>
  );
}

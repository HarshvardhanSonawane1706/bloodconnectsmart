import React, { useState } from 'react';
import { Search, MapPin, Activity, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const MOCK_RESULTS = [
  { id: 'bb1', name: 'City Central Blood Bank', type: 'Blood Bank', distance: '1.2 km', available: ['O+', 'B+', 'A-'], units: 145 },
  { id: 'h1', name: 'Apex General Hospital', type: 'Hospital', distance: '3.4 km', available: ['AB+', 'O-', 'B-'], units: 42 },
  { id: 'c1', name: 'Lions Club Mega Drive', type: 'Camp', distance: '4.8 km', available: ['All'], units: 0, status: 'Ongoing' },
];

export function SmartSearchPage() {
  const [query, setQuery] = useState('');
  const [bloodFilter, setBloodFilter] = useState('');
  const [hlaFilter, setHlaFilter] = useState('');
  
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center py-6">
        <h1 className="text-3xl font-extrabold text-[var(--text)] mb-3">Smart Resource Search</h1>
        <p className="text-[var(--muted)] max-w-xl mx-auto">
          Find nearest hospitals, blood banks, or ongoing donation camps based on specific blood groups and HLA typing parameters.
        </p>
      </div>

      <div className="glass-panel rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-xl space-y-4">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
          <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-[var(--radius-lg)] bg-[var(--bg)] border border-[var(--glass-border)] text-[var(--text)] focus:outline-none focus:border-[var(--blue)] text-lg"
            placeholder="Search by location, hospital name, or zip code..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-[var(--muted)] block mb-1.5 ml-1">Blood Group Required</label>
            <select 
              value={bloodFilter}
              onChange={e => setBloodFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--glass)] border border-[var(--glass-border)] text-sm focus:outline-none focus:border-[var(--blue)]"
            >
              <option value="">Any Blood Group</option>
              {BLOOD_GROUPS.map(bg => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-[var(--muted)] block mb-1.5 ml-1 flex items-center justify-between">
              HLA Typing Filter (Admin/Medical Use)
            </label>
            <input 
              value={hlaFilter}
              onChange={e => setHlaFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--glass)] border border-[var(--glass-border)] text-sm focus:outline-none focus:border-[var(--blue)]"
              placeholder="e.g. HLA-A*02:01"
            />
          </div>
        </div>

        <Button className="w-full py-3 text-base mt-2">Search Resources</Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-[var(--text)] flex items-center gap-2">
          <MapPin size={18} className="text-[var(--blue)]" />
          Nearest Available Resources
        </h3>
        
        {MOCK_RESULTS.map(res => (
          <div key={res.id} className="glass-panel rounded-[var(--radius-xl)] p-5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center hover:border-[var(--blue)] transition-colors cursor-pointer">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-lg text-[var(--text)]">{res.name}</h4>
                <Badge variant={res.type === 'Camp' ? 'green' : 'blue'}>{res.type}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                <span className="flex items-center gap-1"><MapPin size={14} /> {res.distance}</span>
                <span className="flex items-center gap-1"><Activity size={14} /> {res.units > 0 ? `${res.units} units stock` : res.status}</span>
              </div>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-xs font-semibold text-[var(--text-secondary)]">Available:</span>
                {res.available.map(b => <Badge key={b} variant="default" className="text-xs">{b}</Badge>)}
              </div>
            </div>
            
            <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              <Button className="flex-1 sm:flex-none"><ArrowRight size={16} /> Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

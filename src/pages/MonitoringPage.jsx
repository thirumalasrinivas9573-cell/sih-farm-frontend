import React from 'react';
import Card from '../components/Card';

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Crop Monitoring</h1>
      <Card title="Growth Milestones & Field Diary">
        <p className="text-stone-600 text-sm leading-relaxed">
          Crop Monitoring module — Seasonal field log and growth stage tracking coming in Phase 6.
        </p>
      </Card>
    </div>
  );
}

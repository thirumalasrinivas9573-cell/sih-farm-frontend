import React from 'react';
import Card from '../components/Card';

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Alerts & Warnings</h1>
      <Card title="Pest & Advisory Notifications">
        <p className="text-stone-600 text-sm leading-relaxed">
          Alerts module — Early disease warnings and weather alert notifications coming in Phase 7.
        </p>
      </Card>
    </div>
  );
}

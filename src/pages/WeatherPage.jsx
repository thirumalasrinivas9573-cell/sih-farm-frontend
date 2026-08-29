import React from 'react';
import Card from '../components/Card';

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Weather Forecast</h1>
      <Card title="Micro-Climate Weather Intelligence">
        <p className="text-stone-600 text-sm leading-relaxed">
          Weather Forecast module — Village-level rainfall and temperature forecast coming in Phase 6.
        </p>
      </Card>
    </div>
  );
}

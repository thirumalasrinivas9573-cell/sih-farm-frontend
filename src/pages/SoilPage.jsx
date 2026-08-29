import React from 'react';
import Card from '../components/Card';

export default function SoilPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Soil Analysis</h1>
      <Card title="Soil Health Assessment">
        <p className="text-stone-600 text-sm leading-relaxed">
          Soil Analysis module — Detailed soil card input and nutrient analysis coming in Phase 4.
        </p>
      </Card>
    </div>
  );
}

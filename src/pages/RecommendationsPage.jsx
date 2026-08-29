import React from 'react';
import Card from '../components/Card';

export default function RecommendationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Crop Recommendations</h1>
      <Card title="AI-Matched Crop Varieties">
        <p className="text-stone-600 text-sm leading-relaxed">
          Crop Recommendations module — Hyper-local seed and crop advice coming in Phase 4.
        </p>
      </Card>
    </div>
  );
}

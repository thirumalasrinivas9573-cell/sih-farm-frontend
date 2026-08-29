import React from 'react';
import Card from '../components/Card';

export default function ComparePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Compare Crop Options</h1>
      <Card title="Side-by-Side Crop Comparison">
        <p className="text-stone-600 text-sm leading-relaxed">
          Compare Options module — Side-by-side yield and cost comparison coming in later phases.
        </p>
      </Card>
    </div>
  );
}

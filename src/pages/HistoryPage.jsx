import React from 'react';
import Card from '../components/Card';

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Historical Logs</h1>
      <Card title="Past Season Records & Learning">
        <p className="text-stone-600 text-sm leading-relaxed">
          Historical Logs module — Past harvest records and seasonal analytics coming in Phase 9.
        </p>
      </Card>
    </div>
  );
}

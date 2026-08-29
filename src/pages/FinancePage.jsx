import React from 'react';
import Card from '../components/Card';

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Financial Planner</h1>
      <Card title="Budget & Expense Estimation">
        <p className="text-stone-600 text-sm leading-relaxed">
          Financial Planner module — Inputs calculator and yield estimation coming in Phase 5.
        </p>
      </Card>
    </div>
  );
}

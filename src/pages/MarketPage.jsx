import React from 'react';
import Card from '../components/Card';

export default function MarketPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Market Rates</h1>
      <Card title="Live Mandi Prices & Selling Advice">
        <p className="text-stone-600 text-sm leading-relaxed">
          Market Rates module — Real-time APMC mandi price comparison coming in Phase 10.
        </p>
      </Card>
    </div>
  );
}

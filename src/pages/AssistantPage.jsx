import React from 'react';
import Card from '../components/Card';

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">AI Farm Assistant</h1>
      <Card title="Plain Language Agricultural Q&A">
        <p className="text-stone-600 text-sm leading-relaxed">
          AI Assistant module — Natural language conversational farm advisor coming in Phase 8.
        </p>
      </Card>
    </div>
  );
}

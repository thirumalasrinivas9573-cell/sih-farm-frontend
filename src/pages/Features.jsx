import React from 'react';
import Card from '../components/Card';

/**
 * Features page displaying implemented platform modules.
 */
export default function Features() {
  const implementedFeatures = [
    {
      title: 'Farm Profile & Onboarding',
      icon: '🏡',
      desc: 'Set up plot dimensions, village location, irrigation sources, and current crop history in under two minutes.',
      status: 'Active Module',
    },
    {
      title: 'Soil Analysis',
      icon: '🧪',
      desc: 'Input laboratory or soil health card test values (N, P, K, pH, moisture) to receive tailored soil enrichment tips.',
      status: 'Active Module',
    },
    {
      title: 'Crop Recommendations',
      icon: '🌾',
      desc: 'Discover high-yield, disease-resistant crop varieties best matched to your micro-climate and soil profile.',
      status: 'Active Module',
    },
    {
      title: 'Financial Planner',
      icon: '📈',
      desc: 'Estimate seasonal expenditure for seeds, fertilizers, irrigation, and labor against target gross returns.',
      status: 'Active Module',
    },
    {
      title: 'AI Farm Assistant',
      icon: '🤖',
      desc: 'Ask farm questions in plain language to receive instant, practical advice on crop health and disease symptoms.',
      status: 'Active Module',
    },
    {
      title: 'Crop Monitoring',
      icon: '📊',
      desc: 'Log field observations, track growth milestones, and maintain a digital crop diary across the season.',
      status: 'Active Module',
    },
    {
      title: 'Alerts',
      icon: '🔔',
      desc: 'Receive immediate notifications for upcoming pest threats, extreme weather forecasts, and irrigation schedules.',
      status: 'Active Module',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Platform Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Implemented Platform Features
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Core modules built to give farmers clear, actionable intelligence without unnecessary clutter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {implementedFeatures.map((feat, idx) => (
          <Card key={idx} title={feat.title} className="h-full border-stone-200 shadow-2xs hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2 bg-emerald-50 rounded-xl">{feat.icon}</span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {feat.status}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{feat.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

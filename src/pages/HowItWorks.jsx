import React from 'react';
import Card from '../components/Card';

/**
 * HowItWorks page detailing the 10 sequential farmer journey steps.
 */
export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Plan',
      desc: 'Define crop goals, evaluate land capacity, and schedule target planting dates based on seasonal forecasts.',
      icon: '📋',
    },
    {
      num: 2,
      title: 'Analyze',
      desc: 'Test your soil parameters and review village-level weather patterns before buying inputs.',
      icon: '🧪',
    },
    {
      num: 3,
      title: 'Select',
      desc: 'Receive AI-matched crop variety and certified seed recommendations best suited for your field.',
      icon: '🌱',
    },
    {
      num: 4,
      title: 'Finance',
      desc: 'Calculate precise budget requirements for seeds, fertilizers, and labor alongside projected profit margins.',
      icon: '📊',
    },
    {
      num: 5,
      title: 'Cultivate',
      desc: 'Follow day-by-day land preparation, field sowing, and organic/inorganic nutrient application tasks.',
      icon: '🚜',
    },
    {
      num: 6,
      title: 'Monitor',
      desc: 'Log growth progress and track soil moisture levels with automated weekly field check-ins.',
      icon: '👁️',
    },
    {
      num: 7,
      title: 'Protect',
      desc: 'Get early warning alerts for pest infestations, crop diseases, and unexpected weather events.',
      icon: '🛡️',
    },
    {
      num: 8,
      title: 'Harvest',
      desc: 'Identify the exact peak maturity window to harvest crops for maximum quality and weight.',
      icon: '🌾',
    },
    {
      num: 9,
      title: 'Sell',
      desc: 'Compare live rates across nearby mandis and buyers to secure the best selling price.',
      icon: '💰',
    },
    {
      num: 10,
      title: 'Learn',
      desc: 'Review seasonal yields, total costs, and net profits to continuously improve next year’s crop plan.',
      icon: '📘',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Step-by-Step Workflow
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          How The Farmer Journey Works
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          From early planning to post-harvest market sales, here is how our platform supports you at every single step.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <Card
            key={step.num}
            className="border-stone-200 hover:border-emerald-500 transition-colors shadow-2xs"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-xs">
                {step.num < 10 ? `0${step.num}` : step.num}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Public Landing page for AgriDecision (SIH26091).
 * Features hero value proposition, trust signals, and 10-step farmer journey overview.
 */
export default function Landing() {
  const journeySteps = [
    { step: '01', name: 'Plan', desc: 'Set crop goals & assess local land readiness.' },
    { step: '02', name: 'Analyze', desc: 'Test soil health & weather conditions.' },
    { step: '03', name: 'Select', desc: 'Pick optimal seeds based on AI advice.' },
    { step: '04', name: 'Finance', desc: 'Estimate inputs cost & expected yield return.' },
    { step: '05', name: 'Cultivate', desc: 'Follow step-by-step planting schedules.' },
    { step: '06', name: 'Monitor', desc: 'Track crop growth with regular updates.' },
    { step: '07', name: 'Protect', desc: 'Receive pest & disease warning alerts.' },
    { step: '08', name: 'Harvest', desc: 'Identify ideal harvest window timing.' },
    { step: '09', name: 'Sell', desc: 'Compare market rates for maximum profit.' },
    { step: '10', name: 'Learn', desc: 'Review seasonal outcomes for next year.' },
  ];

  const trustHighlights = [
    {
      title: 'Hyper-Local Precision',
      desc: 'Advisories tailored specifically to your village soil and micro-climate rather than generic regional averages.',
      icon: '📍',
    },
    {
      title: 'Clear & Simple Guidance',
      desc: 'No confusing agricultural jargon. Actionable advice presented in direct, easy-to-understand terms.',
      icon: '🗣️',
    },
    {
      title: 'Farmer-First Decision Support',
      desc: 'Built to empower your independent choices at every stage from pre-sowing to final crop sales.',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-emerald-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/90 text-emerald-200 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-700/60">
            <span>🌾</span> Smart India Hackathon (SIH26091)
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Understand your farm. <br className="hidden sm:inline" />
            <span className="text-emerald-300">Make confident decisions.</span>
          </h1>

          <p className="text-base sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            An AI-powered hyper-local agricultural decision support platform giving farmers clear, step-by-step guidance for every stage of farming.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto text-base py-3 px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-bold border border-emerald-500 shadow-md">
                Get Started Free
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto text-base py-3 px-8 bg-emerald-950/80 text-emerald-100 hover:bg-emerald-800 border border-emerald-700">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Designed for Real Farm Needs
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base">
            Simple, trustworthy, and actionable intelligence with zero complicated clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustHighlights.map((item, idx) => (
            <Card key={idx} className="h-full border-stone-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex flex-col items-start gap-3">
                <div className="text-3xl p-2.5 bg-emerald-50 rounded-xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Farmer Journey Summary */}
      <section className="bg-stone-100/80 py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              The 10-Step Farmer Journey
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">
              Guiding you seamlessly from initial land planning to post-harvest market sales.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {journeySteps.map((j) => (
              <div
                key={j.step}
                className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between shadow-2xs hover:border-emerald-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {j.step}
                  </span>
                  <span className="text-emerald-700 font-bold text-sm">→</span>
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">{j.name}</h4>
                <p className="text-xs text-stone-600 leading-normal">{j.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/how-it-works">
              <Button variant="secondary" className="text-sm py-2.5 px-6">
                Learn More About Each Step →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

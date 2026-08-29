import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

/**
 * About page explaining project mission, problem statement, and plain-language solution.
 */
export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
          About SIH26091
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Empowering Farmers with Clear, Hyper-Local Intelligence
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          We build technology that speaks plain language, understands local soil and weather, and puts practical decisions back into the farmer's hands.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="The Problem Farmers Face" className="border-stone-200">
          <p className="text-stone-700 leading-relaxed text-sm">
            Indian farmers often rely on broad, district-wide weather forecasts and general advice that does not match their exact land conditions. Confusing applications with heavy charts, complicated technical terms, and hidden menus make decision-making stressful rather than helpful.
          </p>
        </Card>

        <Card title="Our Mission & Solution" className="border-stone-200">
          <p className="text-stone-700 leading-relaxed text-sm">
            Our platform provides direct, village-level agricultural advice tailored to your exact plot. By breaking down the farming season into 10 clear stages — from pre-sowing soil checks to post-harvest market rates — we guide farmers step-by-step to increase yield and reduce risk.
          </p>
        </Card>
      </div>

      {/* Core Principles */}
      <Card title="Our Core Promises" className="border-stone-200">
        <ul className="space-y-4 text-sm text-stone-700">
          <li className="flex items-start gap-3">
            <span className="text-emerald-700 text-lg">✓</span>
            <div>
              <strong className="font-semibold text-stone-900">Zero Complicated Clutter:</strong>
              <p className="text-stone-600 mt-0.5">Simple screens designed specifically for clarity on any smartphone screen.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-700 text-lg">✓</span>
            <div>
              <strong className="font-semibold text-stone-900">Hyper-Local Accuracy:</strong>
              <p className="text-stone-600 mt-0.5">Recommendations based on your specific location's soil chemistry, micro-climate, and crop history.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-700 text-lg">✓</span>
            <div>
              <strong className="font-semibold text-stone-900">Full Season Support:</strong>
              <p className="text-stone-600 mt-0.5">Continuous decision support across all 10 stages of the agricultural cycle.</p>
            </div>
          </li>
        </ul>
      </Card>

      {/* CTA Footer */}
      <div className="bg-emerald-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-sm">
        <h3 className="text-xl font-bold">Ready to make confident farm decisions?</h3>
        <p className="text-emerald-200 text-sm max-w-xl mx-auto">
          Join thousands of farmers using simple AI intelligence for better crop health and higher profits.
        </p>
        <div className="pt-2">
          <Link to="/signup">
            <Button variant="primary" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-6">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

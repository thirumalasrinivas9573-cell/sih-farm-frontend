import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useAuth } from '../context/AuthContext';
import { useOnboarding } from '../context/OnboardingContext';
import { getFarmDashboardData } from '../services/farmService';

/**
 * Farm Dashboard (Phase 5) - Farmer's Home Screen after login.
 * Focused on answering: "What does the farmer need to do next?"
 */
export default function DashboardPage() {
  const { user } = useAuth();
  const { onboardingData } = useOnboarding();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFarmDashboardData(onboardingData);
      setDashboardData(data);
    } catch (err) {
      setError('Unable to load farm dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="py-16">
        <Loading message="Loading your farm intelligence dashboard..." size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 max-w-xl mx-auto">
        <ErrorMessage message={error} onRetry={fetchDashboard} />
      </div>
    );
  }

  const {
    farmSummary,
    currentCrop,
    weatherSummary,
    soilStatus,
    nextActionItem,
    quickAdvisories,
    journeyProgress,
  } = dashboardData;

  const journeySteps = [
    { num: 1, name: 'Plan', path: '/dashboard' },
    { num: 2, name: 'Analyze', path: '/soil' },
    { num: 3, name: 'Select', path: '/recommendations' },
    { num: 4, name: 'Finance', path: '/finance' },
    { num: 5, name: 'Cultivate', path: '/monitoring' },
    { num: 6, name: 'Monitor', path: '/monitoring' },
    { num: 7, name: 'Protect', path: '/alerts' },
    { num: 8, name: 'Harvest', path: '/history' },
    { num: 9, name: 'Sell', path: '/market' },
    { num: 10, name: 'Learn', path: '/history' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* 1. Header & Farmer Greeting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Namaste, {user?.name || 'Ramesh Patel'} 👋
            </h1>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Active Farmer
            </span>
          </div>
          <p className="text-sm text-stone-600 font-medium flex items-center gap-2">
            <span>🏡 {farmSummary.farmName}</span>
            <span>•</span>
            <span>📍 {farmSummary.location}</span>
            <span>•</span>
            <span className="text-emerald-800 font-bold">{farmSummary.landArea}</span>
          </p>
        </div>

        <Link to="/onboarding">
          <Button variant="secondary" className="text-xs py-2 px-3.5 border-stone-300">
            ✏️ Edit Farm Profile
          </Button>
        </Link>
      </div>

      {/* 2. 10-Step Farmer Journey Tracker Bar */}
      <Card title="Your Seasonal Journey Progress" className="border-stone-200">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-600">
            <span className="font-semibold text-stone-800">
              Current Stage: <strong className="text-emerald-800 font-bold">Step {journeyProgress.currentStepIndex} — {journeyProgress.currentStepName}</strong>
            </span>
            <span>{journeyProgress.stepDescription}</span>
          </div>

          {/* Horizontal Steps Bar */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 pt-1">
            {journeySteps.map((s) => {
              const isActive = s.num === journeyProgress.currentStepIndex;
              const isPast = s.num < journeyProgress.currentStepIndex;
              return (
                <Link
                  key={s.num}
                  to={s.path}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-800 ring-2 ring-emerald-500 shadow-xs'
                      : isPast
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                      : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold leading-none">
                    {s.num < 10 ? `0${s.num}` : s.num}
                  </span>
                  <span className="text-xs font-bold leading-tight mt-1">{s.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Card>

      {/* 3. Primary Next Action Item Callout (Answering "What do I do next?") */}
      <div className="bg-emerald-900 text-white p-6 rounded-2xl border border-emerald-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/90 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-700/60">
            <span>🎯</span> Recommended Next Action
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {nextActionItem.title}
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed">
            {nextActionItem.description}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => navigate(nextActionItem.linkPath)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 text-sm shrink-0 border border-emerald-500 shadow-sm w-full md:w-auto"
        >
          {nextActionItem.buttonLabel}
        </Button>
      </div>

      {/* 4. Weather & Soil Overview Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weather Intelligence Card */}
        <Card title="Village Weather Forecast" className="border-stone-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl p-2 bg-stone-100 rounded-xl">{weatherSummary.icon}</span>
                <div>
                  <span className="text-2xl font-extrabold text-stone-900">
                    {weatherSummary.tempC}°C
                  </span>
                  <p className="text-xs text-stone-600 font-semibold">{weatherSummary.condition} • Humidity {weatherSummary.humidity}</p>
                </div>
              </div>
              <Link to="/weather">
                <Button variant="secondary" className="text-xs py-1.5 px-3">
                  Full Forecast
                </Button>
              </Link>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 border border-stone-200/60">
              🌧️ <strong className="font-semibold text-stone-900">Notice:</strong> {weatherSummary.shortForecast}
            </div>
          </div>
        </Card>

        {/* Soil Health Status Card */}
        <Card title="Soil Health Summary" className="border-stone-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {soilStatus.status}
                </span>
                <p className="text-xs text-stone-500 mt-1">Tested {soilStatus.lastUpdated}</p>
              </div>
              <Link to="/soil">
                <Button variant="secondary" className="text-xs py-1.5 px-3">
                  Soil Details
                </Button>
              </Link>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 font-mono border border-stone-200/60 leading-relaxed">
              🧪 {soilStatus.nPKSummary} • pH: {soilStatus.ph}
            </div>
          </div>
        </Card>
      </div>

      {/* 5. Current Crop Overview */}
      {currentCrop && (
        <Card title="Current Target Crop" className="border-stone-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                🌾
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">{currentCrop.name}</h3>
                <p className="text-xs text-stone-600">{currentCrop.stage}</p>
              </div>
            </div>
            <div className="text-left sm:text-right space-y-1">
              <div className="text-xs font-semibold text-stone-700">
                Target Sowing: <strong className="text-stone-900">{currentCrop.targetSowingDate}</strong>
              </div>
              <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block border border-emerald-200">
                ✓ {currentCrop.healthStatus}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* 6. Quick Advisories & Alerts */}
      <Card title="Farm Advisories & Alerts" className="border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickAdvisories.map((adv) => (
            <div
              key={adv.id}
              className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{adv.icon}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      adv.priority === 'Important'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : adv.priority === 'Info'
                        ? 'bg-blue-100 text-blue-900 border border-blue-300'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    }`}
                  >
                    {adv.priority}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-stone-900">{adv.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{adv.message}</p>
              </div>
              <span className="text-[10px] text-stone-400 font-semibold uppercase pt-1">
                {adv.category}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* 7. Quick Module Action Shortcuts */}
      <div className="pt-2">
        <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
          Quick Module Shortcuts
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            to="/soil"
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 transition-colors shadow-2xs text-center space-y-1.5"
          >
            <span className="text-2xl">🧪</span>
            <div className="text-xs font-bold text-stone-900">Soil Analysis</div>
          </Link>
          <Link
            to="/recommendations"
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 transition-colors shadow-2xs text-center space-y-1.5"
          >
            <span className="text-2xl">🌱</span>
            <div className="text-xs font-bold text-stone-900">Recommendations</div>
          </Link>
          <Link
            to="/assistant"
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 transition-colors shadow-2xs text-center space-y-1.5"
          >
            <span className="text-2xl">🤖</span>
            <div className="text-xs font-bold text-stone-900">AI Assistant</div>
          </Link>
          <Link
            to="/finance"
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 transition-colors shadow-2xs text-center space-y-1.5"
          >
            <span className="text-2xl">💰</span>
            <div className="text-xs font-bold text-stone-900">Financial Planner</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

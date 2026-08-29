import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Mobile Bottom Navigation component (<768px).
 * Displays core quick-access tabs plus a "More" drawer revealing all 12 platform routes.
 */
export default function MobileNavigation() {
  const [moreDrawerOpen, setMoreDrawerOpen] = useState(false);
  const location = useLocation();

  const primaryItems = [
    { name: 'Home', path: '/dashboard', icon: '📊' },
    { name: 'Crops', path: '/recommendations', icon: '🌱' },
    { name: 'Assistant', path: '/assistant', icon: '🤖' },
    { name: 'Alerts', path: '/alerts', icon: '🔔' },
    { name: 'Profile', path: '/profile', icon: '👤' },
  ];

  const allItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Soil Analysis', path: '/soil', icon: '🧪' },
    { name: 'Recommendations', path: '/recommendations', icon: '🌱' },
    { name: 'Compare Options', path: '/compare', icon: '⚖️' },
    { name: 'Financial Planner', path: '/finance', icon: '💰' },
    { name: 'Weather Forecast', path: '/weather', icon: '🌤️' },
    { name: 'Crop Monitoring', path: '/monitoring', icon: '📈' },
    { name: 'Alerts & Warnings', path: '/alerts', icon: '🔔' },
    { name: 'AI Assistant', path: '/assistant', icon: '🤖' },
    { name: 'Historical Logs', path: '/history', icon: '📜' },
    { name: 'Market Rates', path: '/market', icon: '🏪' },
    { name: 'Farm Profile', path: '/profile', icon: '👤' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile "More" Full Navigation Drawer Overlay */}
      {moreDrawerOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-stone-900/60 backdrop-blur-xs flex flex-col justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMoreDrawerOpen(false);
          }}
        >
          <div className="bg-white rounded-t-2xl p-5 border-t border-stone-200 shadow-xl max-h-[80vh] flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-base font-bold text-stone-900">All Modules</h3>
              <button
                type="button"
                onClick={() => setMoreDrawerOpen(false)}
                className="p-1 text-stone-500 hover:text-stone-800 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5 overflow-y-auto max-h-[60vh]">
              {allItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMoreDrawerOpen(false)}
                    className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border text-xs font-semibold gap-1.5 transition-colors ${
                      active
                        ? 'bg-emerald-700 text-white border-emerald-800'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="leading-tight">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Bar */}
      <nav className="md:hidden sticky bottom-0 z-30 bg-white border-t border-stone-200 shadow-lg px-2 py-1.5 flex items-center justify-around">
        {primaryItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                active ? 'text-emerald-800 font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="mt-1">{item.name}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={() => setMoreDrawerOpen(true)}
          className="flex flex-col items-center justify-center px-2 py-1 rounded-lg text-[11px] font-semibold text-stone-600 hover:text-stone-900"
        >
          <span className="text-lg leading-none">☰</span>
          <span className="mt-1">More</span>
        </button>
      </nav>
    </>
  );
}

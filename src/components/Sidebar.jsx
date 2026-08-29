import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Desktop-only Sidebar component (~768px+).
 * Renders vertical list of 12 navigation items with active route highlighting.
 */
export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
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
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-stone-200 shrink-0 min-h-[calc(100vh-4rem)] p-3">
      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-3 py-2">
        Platform Navigation
      </div>
      <nav className="space-y-1 overflow-y-auto flex-1">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                active
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

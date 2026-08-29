import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

/**
 * Top Navigation Bar for authenticated pages.
 * Displays brand, user avatar/details, and logout action.
 */
export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (name) => {
    if (!name) return 'FM';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-stone-200 shadow-2xs h-16 flex items-center px-4 sm:px-6">
      <div className="w-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            🌾
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold text-stone-900 tracking-tight leading-none">
              AgriDecision
            </span>
            <span className="text-[10px] font-semibold text-emerald-800 tracking-wide uppercase mt-0.5">
              Decision Support System
            </span>
          </div>
        </Link>

        {/* Right: User Profile Badge & Logout */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 pl-3 border-l border-stone-200">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs flex items-center justify-center shadow-2xs">
              {getInitials(user?.name)}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-stone-900 leading-tight">
                {user?.name || 'Ramesh Patel'}
              </span>
              <span className="text-[10px] text-stone-500 leading-tight">
                {user?.village || 'Mandya'}
              </span>
            </div>
          </div>

          <Button
            variant="secondary"
            onClick={handleLogout}
            className="text-xs py-1.5 px-3 border-stone-300 hover:bg-stone-100 text-stone-700"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

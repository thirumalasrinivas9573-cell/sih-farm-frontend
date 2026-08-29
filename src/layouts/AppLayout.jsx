import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MobileNavigation from '../components/MobileNavigation';

/**
 * AppLayout component wrapping authenticated user pages.
 * Includes Navbar, Desktop Sidebar, Scrollable Content Area, and Mobile Bottom Nav.
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="flex flex-1 max-w-7xl mx-auto w-full">
          <Sidebar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
      <MobileNavigation />
    </div>
  );
}

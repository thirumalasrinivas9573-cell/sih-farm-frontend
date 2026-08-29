import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { OnboardingProvider } from './context/OnboardingContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './layouts/AppLayout';
import PublicNavbar from './components/PublicNavbar';

// Public Pages
import Landing from './pages/Landing';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Onboarding Multi-Step Layout
import OnboardingLayout from './pages/onboarding/OnboardingLayout';

// Authenticated Placeholder Pages
import DashboardPage from './pages/DashboardPage';
import SoilPage from './pages/SoilPage';
import RecommendationsPage from './pages/RecommendationsPage';
import ComparePage from './pages/ComparePage';
import FinancePage from './pages/FinancePage';
import WeatherPage from './pages/WeatherPage';
import MonitoringPage from './pages/MonitoringPage';
import AlertsPage from './pages/AlertsPage';
import AssistantPage from './pages/AssistantPage';
import HistoryPage from './pages/HistoryPage';
import MarketPage from './pages/MarketPage';
import ProfilePage from './pages/ProfilePage';

/**
 * Public Layout wrapper rendering PublicNavbar and footer for public routes.
 */
function PublicLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col justify-between">
      <div>
        <PublicNavbar />
        <main>
          <Outlet />
        </main>
      </div>
      <footer className="bg-stone-900 text-stone-400 text-xs py-6 px-4 border-t border-stone-800 text-center space-y-1">
        <p>© 2026 AgriDecision — AI Farm Intelligence (SIH26091). All rights reserved.</p>
        <p className="text-stone-500">Public & Protected Application Shell</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes with PublicNavbar */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/features" element={<Features />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              {/* Standalone Onboarding Layout */}
              <Route path="/onboarding" element={<OnboardingLayout />} />

              {/* Main Authenticated App Layout */}
              <Route element={<AppLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/soil" element={<SoilPage />} />
                <Route path="/recommendations" element={<RecommendationsPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/finance" element={<FinancePage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/assistant" element={<AssistantPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/market" element={<MarketPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
    </AuthProvider>
  );
}

export default App;





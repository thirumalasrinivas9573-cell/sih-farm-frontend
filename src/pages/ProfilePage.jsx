import React from 'react';
import Card from '../components/Card';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-extrabold text-stone-900">Farm Profile</h1>
      <Card title="Farmer & Plot Details">
        <div className="space-y-3 text-sm text-stone-700">
          <p>
            <strong className="font-semibold text-stone-900">Name:</strong> {user?.name || 'Ramesh Patel'}
          </p>
          <p>
            <strong className="font-semibold text-stone-900">Email:</strong> {user?.email || 'farmer@example.com'}
          </p>
          <p>
            <strong className="font-semibold text-stone-900">Location:</strong> {user?.village || 'Mandya, Karnataka'}
          </p>
          <p className="text-xs text-stone-500 pt-2 border-t border-stone-100">
            Full plot profile & soil card management coming in Phase 4.
          </p>
        </div>
      </Card>
    </div>
  );
}

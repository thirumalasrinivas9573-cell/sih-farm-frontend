import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 7: Summary & Onboarding Completion Screen
 */
export default function StepComplete() {
  const { onboardingData } = useOnboarding();
  const navigate = useNavigate();

  const { personalInfo, farmInfo, location, landDetails, waterAvailability, budget } =
    onboardingData;

  useEffect(() => {
    // Log complete onboarding payload to console as required for Phase 4
    console.log('[Onboarding Complete] Final Farm Profile Payload:', onboardingData);
  }, [onboardingData]);

  const handleFinish = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-xs">
          ✓
        </div>
        <h2 className="text-2xl font-extrabold text-stone-900">Farm Profile Setup Complete!</h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto">
          Here is a summary of your farm profile. You are now ready to access your personalized decision dashboard.
        </p>
      </div>

      {/* Summary Card */}
      <Card title="Onboarding Summary" className="border-stone-200 divide-y divide-stone-100">
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Farmer Name</span>
          <span className="font-semibold text-stone-900">{personalInfo.fullName || 'N/A'}</span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Phone & Language</span>
          <span className="font-semibold text-stone-900">
            {personalInfo.phone} ({personalInfo.language})
          </span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Farm Name & Type</span>
          <span className="font-semibold text-stone-900">
            {farmInfo.farmName} • {farmInfo.farmType}
          </span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Location</span>
          <span className="font-semibold text-stone-900">
            {location.village}, {location.district}, {location.state}
          </span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Cultivable Land Area</span>
          <span className="font-semibold text-stone-900">
            {landDetails.area} {landDetails.unit}
          </span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Water Source</span>
          <span className="font-semibold text-stone-900">{waterAvailability.irrigationType}</span>
        </div>
        <div className="py-2.5 flex justify-between items-center text-sm">
          <span className="text-stone-500 font-medium">Planned Budget</span>
          <span className="font-semibold text-emerald-800">
            ₹{Number(budget.amount).toLocaleString('en-IN')} INR
          </span>
        </div>
      </Card>

      <div className="pt-2">
        <Button variant="primary" onClick={handleFinish} className="w-full py-3 text-base font-bold">
          Go to Dashboard →
        </Button>
      </div>
    </div>
  );
}

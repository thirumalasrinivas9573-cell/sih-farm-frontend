import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useOnboarding } from '../../context/OnboardingContext';

import StepPersonalInfo from './StepPersonalInfo';
import StepFarmInfo from './StepFarmInfo';
import StepLocation from './StepLocation';
import StepLandDetails from './StepLandDetails';
import StepWaterAvailability from './StepWaterAvailability';
import StepBudget from './StepBudget';
import StepComplete from './StepComplete';

/**
 * OnboardingLayout hosting multi-step form progress, step navigation, and validation checks.
 */
export default function OnboardingLayout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const { onboardingData } = useOnboarding();

  const totalSteps = 7;

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      const { fullName, phone } = onboardingData.personalInfo;
      if (!fullName || !fullName.trim()) {
        newErrors.fullName = 'Full name is required.';
      }
      if (!phone || !phone.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
      }
    } else if (step === 2) {
      const { farmName } = onboardingData.farmInfo;
      if (!farmName || !farmName.trim()) {
        newErrors.farmName = 'Farm name is required.';
      }
    } else if (step === 3) {
      const { state, district, village } = onboardingData.location;
      if (!state || !state.trim()) newErrors.state = 'State is required.';
      if (!district || !district.trim()) newErrors.district = 'District is required.';
      if (!village || !village.trim()) newErrors.village = 'Village/Town is required.';
    } else if (step === 4) {
      const { area } = onboardingData.landDetails;
      const numArea = parseFloat(area);
      if (!area || isNaN(numArea) || numArea <= 0) {
        newErrors.area = 'Please enter a valid land area greater than 0.';
      }
    } else if (step === 5) {
      const { irrigationType } = onboardingData.waterAvailability;
      if (!irrigationType) newErrors.irrigationType = 'Please select an irrigation type.';
    } else if (step === 6) {
      const { amount } = onboardingData.budget;
      const numAmount = parseFloat(amount);
      if (!amount || isNaN(numAmount) || numAmount <= 0) {
        newErrors.amount = 'Please enter a valid budget amount greater than ₹0.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <StepPersonalInfo errors={errors} />;
      case 2:
        return <StepFarmInfo errors={errors} />;
      case 3:
        return <StepLocation errors={errors} />;
      case 4:
        return <StepLandDetails errors={errors} />;
      case 5:
        return <StepWaterAvailability errors={errors} />;
      case 6:
        return <StepBudget errors={errors} />;
      case 7:
        return <StepComplete />;
      default:
        return null;
    }
  };

  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl space-y-6">
        {/* Header Progress Bar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-stone-600">
            <span className="text-emerald-800 font-bold uppercase tracking-wider">
              Farm Profile Setup
            </span>
            <span>
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-700 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Step Card */}
        <Card className="border-stone-200 shadow-md">
          {renderStepComponent()}

          {/* Action Navigation Footer (Steps 1 to 6) */}
          {currentStep < 7 && (
            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}
              >
                ← Back
              </Button>

              <Button variant="primary" onClick={handleNext} className="py-2.5 px-6">
                Next Step →
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

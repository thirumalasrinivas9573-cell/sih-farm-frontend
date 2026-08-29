import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext(null);

const initialOnboardingState = {
  personalInfo: {
    fullName: '',
    phone: '',
    language: 'English',
  },
  farmInfo: {
    farmName: '',
    farmType: 'Crop farming',
  },
  location: {
    state: '',
    district: '',
    village: '',
  },
  landDetails: {
    area: '',
    unit: 'Acres',
  },
  waterAvailability: {
    irrigationType: 'Borewell',
    description: '',
  },
  budget: {
    amount: '',
  },
};

/**
 * OnboardingProvider managing multi-step farm profile state across onboarding workflow.
 */
export function OnboardingProvider({ children }) {
  const [onboardingData, setOnboardingData] = useState(initialOnboardingState);

  const updateStepData = (stepKey, data) => {
    setOnboardingData((prev) => ({
      ...prev,
      [stepKey]: {
        ...prev[stepKey],
        ...data,
      },
    }));
  };

  const resetOnboarding = () => {
    setOnboardingData(initialOnboardingState);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateStepData,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

/**
 * Custom hook to consume OnboardingContext.
 */
export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}

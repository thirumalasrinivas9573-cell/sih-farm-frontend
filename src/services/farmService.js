/**
 * Farm Intelligence Service - Mock Data Service for SIH26091
 * Simulates backend API responses for farm dashboard data.
 */

export async function getFarmDashboardData(onboardingData = null) {
  // Simulate network latency (600ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Extract custom onboarding data if farmer has completed onboarding
  const farmName = onboardingData?.farmInfo?.farmName || 'Green Valley Plot A';
  const village = onboardingData?.location?.village || 'Mandya';
  const district = onboardingData?.location?.district || 'Mandya';
  const state = onboardingData?.location?.state || 'Karnataka';
  const locationStr = `${village}, ${district}, ${state}`;
  const landArea = onboardingData?.landDetails?.area || '2.5';
  const landUnit = onboardingData?.landDetails?.unit || 'Acres';

  return {
    farmSummary: {
      farmName,
      location: locationStr,
      landArea: `${landArea} ${landUnit}`,
      irrigationType: onboardingData?.waterAvailability?.irrigationType || 'Borewell',
    },
    currentCrop: {
      name: 'Paddy / Rice (Jyothi Variety)',
      stage: 'Step 3 — Seed Selection & Pre-Sowing',
      targetSowingDate: '15 September 2026',
      healthStatus: 'Optimal Soil Moisture',
    },
    weatherSummary: {
      condition: 'Partly Cloudy',
      tempC: 28,
      humidity: '68%',
      shortForecast: 'Light evening showers expected in Mandya district on Friday (+12mm).',
      icon: '⛅',
    },
    soilStatus: {
      status: 'Soil Test Required for Season',
      lastUpdated: '14 days ago',
      nPKSummary: 'N: Moderate (240 kg/ha) | P: Low (14 kg/ha) | K: High (310 kg/ha)',
      ph: 6.8,
    },
    nextActionItem: {
      title: 'Complete Seed Variety Selection',
      actionType: 'High Priority',
      urgency: 'Action Recommended Before 10 Sept',
      description:
        'Based on your soil pH (6.8) and Borewell irrigation, Jyothi Paddy or MTU 1010 seeds are recommended for maximum yield return.',
      linkPath: '/recommendations',
      buttonLabel: 'View Crop Recommendations →',
    },
    quickAdvisories: [
      {
        id: 'adv-1',
        category: 'Soil Health',
        title: 'Phosphorus Boost Required',
        message: 'Apply Single Super Phosphate (SSP) at 50 kg/acre during field preparation.',
        priority: 'Important',
        icon: '🧪',
      },
      {
        id: 'adv-2',
        category: 'Weather Alert',
        title: 'Monsoon Shower Warning',
        message: 'Light rainfall expected on Friday. Hold off herbicide spraying until Saturday.',
        priority: 'Info',
        icon: '🌧️',
      },
      {
        id: 'adv-3',
        category: 'Market Intelligence',
        title: 'Paddy Rates Up 4%',
        message: 'Mandya Mandi price for Grade A Paddy reached ₹2,180 / Quintal (+₹85).',
        priority: 'Tip',
        icon: '📈',
      },
    ],
    journeyProgress: {
      currentStepIndex: 3,
      currentStepName: 'Select',
      stepDescription: 'Choose optimal seeds matched to your soil & budget.',
      totalSteps: 10,
    },
  };
}

import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 5: Water Availability Form
 */
export default function StepWaterAvailability({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { irrigationType, description } = onboardingData.waterAvailability;

  const irrigationOptions = [
    { value: 'Borewell', label: 'Borewell / Tube Well' },
    { value: 'Canal', label: 'Canal Irrigation' },
    { value: 'Rain-fed', label: 'Rain-fed (Monsoon Dependent)' },
    { value: 'Drip', label: 'Drip / Micro Sprinkler' },
    { value: 'River/Pond', label: 'River / Open Pond / Well' },
    { value: 'Other', label: 'Other Mixed Source' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('waterAvailability', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Water & Irrigation Availability</h2>
        <p className="text-sm text-stone-600 mt-1">
          Tell us how your farm is irrigated to match water-suited crop options.
        </p>
      </div>

      <Select
        label="Primary Irrigation Type"
        name="irrigationType"
        options={irrigationOptions}
        value={irrigationType}
        onChange={handleChange}
        required
        error={errors.irrigationType}
      />

      <Input
        label="Water Source Description (Optional)"
        name="description"
        placeholder="e.g. 2 borewells with seasonal motor pump supply"
        value={description}
        onChange={handleChange}
        error={errors.description}
      />
    </div>
  );
}

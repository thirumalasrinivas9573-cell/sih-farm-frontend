import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 2: Farm Information Form
 */
export default function StepFarmInfo({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { farmName, farmType } = onboardingData.farmInfo;

  const farmTypes = [
    { value: 'Crop farming', label: 'Crop Farming (Field Crops)' },
    { value: 'Mixed farming', label: 'Mixed Farming (Crops + Livestock)' },
    { value: 'Horticulture', label: 'Horticulture (Fruits & Vegetables)' },
    { value: 'Organic farming', label: 'Organic Farming' },
    { value: 'Livestock', label: 'Livestock / Dairy Only' },
    { value: 'Other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('farmInfo', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Farm Information</h2>
        <p className="text-sm text-stone-600 mt-1">
          Provide basic details about your farming operations.
        </p>
      </div>

      <Input
        label="Farm Name / Label"
        name="farmName"
        placeholder="e.g. Green Valley Plot A"
        value={farmName}
        onChange={handleChange}
        required
        error={errors.farmName}
      />

      <Select
        label="Farm Type"
        name="farmType"
        options={farmTypes}
        value={farmType}
        onChange={handleChange}
        required
        error={errors.farmType}
      />
    </div>
  );
}

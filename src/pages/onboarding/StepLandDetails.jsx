import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 4: Land Details Form
 */
export default function StepLandDetails({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { area, unit } = onboardingData.landDetails;

  const units = [
    { value: 'Acres', label: 'Acres' },
    { value: 'Hectares', label: 'Hectares' },
    { value: 'Bigha', label: 'Bigha' },
    { value: 'Guntha', label: 'Guntha' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('landDetails', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Land Area Details</h2>
        <p className="text-sm text-stone-600 mt-1">
          Enter the total cultivable land size for input and seed calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <Input
            label="Total Land Area"
            name="area"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="e.g. 2.5"
            value={area}
            onChange={handleChange}
            required
            error={errors.area}
          />
        </div>

        <div>
          <Select
            label="Measurement Unit"
            name="unit"
            options={units}
            value={unit}
            onChange={handleChange}
            required
            error={errors.unit}
          />
        </div>
      </div>
    </div>
  );
}

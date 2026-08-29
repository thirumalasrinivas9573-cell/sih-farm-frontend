import React from 'react';
import Input from '../../components/Input';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 3: Location Information Form
 */
export default function StepLocation({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { state, district, village } = onboardingData.location;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('location', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Farm Location</h2>
        <p className="text-sm text-stone-600 mt-1">
          Specify your farm's location for village-level soil and weather advisories.
        </p>
      </div>

      <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg flex items-center gap-2">
        <span>📍</span>
        <span>Note: Interactive GPS map pin selection coming soon in future updates.</span>
      </div>

      <Input
        label="State"
        name="state"
        placeholder="e.g. Karnataka"
        value={state}
        onChange={handleChange}
        required
        error={errors.state}
      />

      <Input
        label="District"
        name="district"
        placeholder="e.g. Mandya"
        value={district}
        onChange={handleChange}
        required
        error={errors.district}
      />

      <Input
        label="Village / Town"
        name="village"
        placeholder="e.g. Maddur Village"
        value={village}
        onChange={handleChange}
        required
        error={errors.village}
      />
    </div>
  );
}

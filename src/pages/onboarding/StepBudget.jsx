import React from 'react';
import Input from '../../components/Input';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 6: Financial Budget Form
 */
export default function StepBudget({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { amount } = onboardingData.budget;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('budget', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Seasonal Target Budget</h2>
        <p className="text-sm text-stone-600 mt-1">
          Estimate your planned expenditure for seeds, fertilizers, labor, and fuel.
        </p>
      </div>

      <div className="relative">
        <Input
          label="Planned Seasonal Budget (₹ INR)"
          name="amount"
          type="number"
          min="1"
          step="100"
          placeholder="e.g. 50000"
          value={amount}
          onChange={handleChange}
          required
          error={errors.amount}
        />
      </div>

      <div className="p-3 bg-stone-100 border border-stone-200 rounded-lg text-xs text-stone-600 leading-relaxed">
        💡 <strong className="font-semibold text-stone-800">Why we ask:</strong> This helps our Financial Planner suggest seed varieties and nutrient schedules that fit comfortably within your budget limits.
      </div>
    </div>
  );
}

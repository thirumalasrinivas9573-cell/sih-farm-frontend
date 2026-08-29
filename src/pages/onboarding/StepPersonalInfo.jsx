import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useOnboarding } from '../../context/OnboardingContext';

/**
 * Step 1: Personal Information Form
 */
export default function StepPersonalInfo({ errors = {} }) {
  const { onboardingData, updateStepData } = useOnboarding();
  const { fullName, phone, language } = onboardingData.personalInfo;

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi (हिंदी)' },
    { value: 'Kannada', label: 'Kannada (ಕನ್ನಡ)' },
    { value: 'Telugu', label: 'Telugu (తెలుగు)' },
    { value: 'Tamil', label: 'Tamil (தமிழ்)' },
    { value: 'Marathi', label: 'Marathi (मराठी)' },
    { value: 'Punjabi', label: 'Punjabi (ਪੰਜਾਬੀ)' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateStepData('personalInfo', { [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-extrabold text-stone-900">Personal Information</h2>
        <p className="text-sm text-stone-600 mt-1">
          Tell us about yourself so we can personalize your agricultural advice.
        </p>
      </div>

      <Input
        label="Full Name"
        name="fullName"
        placeholder="e.g. Ramesh Patel"
        value={fullName}
        onChange={handleChange}
        required
        error={errors.fullName}
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="e.g. 9876543210"
        value={phone}
        onChange={handleChange}
        required
        error={errors.phone}
      />

      <Select
        label="Preferred Language"
        name="language"
        options={languages}
        value={language}
        onChange={handleChange}
        required
        error={errors.language}
      />
    </div>
  );
}

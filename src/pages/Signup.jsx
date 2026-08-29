import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import { useAuth } from '../context/AuthContext';

/**
 * Signup page connected to AuthContext mock authentication.
 */
export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      login(formData);
      setIsSubmitting(false);
      navigate('/onboarding');
    }, 400);
  };


  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex items-center justify-center p-4 sm:p-6">
      <Card title="Create Farmer Account" className="w-full max-w-md border-stone-200 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {formError && <ErrorMessage message={formError} />}

          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="e.g. Ramesh Patel"
            value={formData.name}
            onChange={handleChange}
            required
            error={errors.name}
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="e.g. ramesh@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Create a password (min. 6 characters)"
            value={formData.password}
            onChange={handleChange}
            required
            error={errors.password}
          />

          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            className="w-full py-2.5 mt-2"
          >
            Register Account
          </Button>

          <div className="text-center pt-3 border-t border-stone-100">
            <p className="text-xs text-stone-600">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-800 font-bold hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}


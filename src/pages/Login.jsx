import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import { useAuth } from '../context/AuthContext';

/**
 * Login page connected to AuthContext mock authentication.
 */
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: 'farmer@example.com',
    password: 'password123',
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

  const executeLogin = (userData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      login(userData);
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    executeLogin(formData);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex items-center justify-center p-4 sm:p-6">
      <Card title="Log In to AgriDecision" className="w-full max-w-md border-stone-200 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {formError && <ErrorMessage message={formError} />}

          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="e.g. farmer@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
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
            Log In
          </Button>

          <div className="pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => executeLogin({ email: 'demo@farmer.org', name: 'Ramesh Patel' })}
              className="w-full py-2 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-300"
            >
              ⚡ Quick Demo Login (Skip Form)
            </Button>
          </div>

          <div className="text-center pt-3 border-t border-stone-100">
            <p className="text-xs text-stone-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-emerald-800 font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}


import React, { useId } from 'react';

/**
 * Accessible Input component with label, required indicator, and non-color-exclusive error states.
 */
export default function Input({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  error = '',
  placeholder = '',
  className = '',
  id,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;

  const borderAndFocusStyles = error
    ? 'border-red-500 text-stone-900 focus:border-red-600 focus:ring-red-600'
    : 'border-stone-300 text-stone-900 focus:border-emerald-600 focus:ring-emerald-600';

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-stone-800 flex items-center gap-1"
        >
          {label}
          {required && (
            <span className="text-red-600 font-bold" title="Required field">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm shadow-xs transition-colors placeholder:text-stone-400 focus:outline-none focus:ring-2 ${borderAndFocusStyles}`}
        {...props}
      />

      {error && (
        <p
          id={errorId}
          className="text-xs text-red-700 font-medium flex items-center gap-1.5 mt-0.5"
          role="alert"
        >
          <svg
            className="w-4 h-4 shrink-0 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            <strong className="font-semibold">Error:</strong> {error}
          </span>
        </p>
      )}
    </div>
  );
}

import React, { useId } from 'react';

/**
 * Accessible Select component accepting an options array (objects or strings).
 */
export default function Select({
  label,
  options = [],
  value,
  onChange,
  error = '',
  required = false,
  placeholder = 'Select an option',
  className = '',
  id,
  ...props
}) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const errorId = `${selectId}-error`;

  const borderAndFocusStyles = error
    ? 'border-red-500 text-stone-900 focus:border-red-600 focus:ring-red-600'
    : 'border-stone-300 text-stone-900 focus:border-emerald-600 focus:ring-emerald-600';

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`.trim()}>
      {label && (
        <label
          htmlFor={selectId}
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

      <div className="relative w-full">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`w-full appearance-none px-3.5 py-2.5 pr-10 bg-white border rounded-lg text-sm shadow-xs transition-colors focus:outline-none focus:ring-2 ${borderAndFocusStyles}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt, index) => {
            const optValue = typeof opt === 'object' && opt !== null ? opt.value : opt;
            const optLabel = typeof opt === 'object' && opt !== null ? opt.label : opt;
            return (
              <option key={optValue ?? index} value={optValue}>
                {optLabel}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

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

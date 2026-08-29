import React from 'react';

/**
 * Reusable Button component for SIH Farm Platform.
 * Supports primary, secondary, and danger variants, loading state, and custom class merging.
 */
export default function Button({
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.99]';

  const variants = {
    primary:
      'bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-600 shadow-sm',
    secondary:
      'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-300 focus:ring-stone-400',
    danger:
      'bg-red-700 text-white hover:bg-red-800 focus:ring-red-600 shadow-sm',
  };

  const selectedVariant = variants[variant] || variants.primary;
  const isInteractionDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isInteractionDisabled}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant} ${className}`.trim()}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
}

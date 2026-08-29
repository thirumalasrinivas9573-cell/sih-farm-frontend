import React from 'react';

/**
 * Centered Loading spinner component with configurable sizes and optional text message.
 */
export default function Loading({ message, size = 'md', className = '' }) {
  const sizeMap = {
    sm: { spinner: 'w-5 h-5', text: 'text-xs' },
    md: { spinner: 'w-8 h-8', text: 'text-sm' },
    lg: { spinner: 'w-12 h-12', text: 'text-base' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      role="status"
      className={`flex flex-col items-center justify-center gap-3 p-6 text-stone-600 ${className}`.trim()}
    >
      <svg
        className={`animate-spin text-emerald-700 ${currentSize.spinner}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {message && <p className={`font-medium text-stone-700 ${currentSize.text}`}>{message}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

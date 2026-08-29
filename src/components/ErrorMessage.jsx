import React from 'react';
import Button from './Button';

/**
 * Friendly non-technical error display with an alert icon and optional retry action.
 */
export default function ErrorMessage({
  message = 'Something went wrong while processing your request. Please try again.',
  onRetry,
  className = '',
}) {
  return (
    <div
      role="alert"
      className={`p-4 rounded-xl bg-red-50/90 border border-red-200 text-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs ${className}`.trim()}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-red-100 text-red-700 rounded-lg shrink-0 mt-0.5 sm:mt-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="space-y-0.5">
          <h4 className="text-sm font-semibold text-red-900">Notice</h4>
          <p className="text-sm text-stone-700 leading-normal">{message}</p>
        </div>
      </div>

      {onRetry && (
        <Button
          variant="secondary"
          onClick={onRetry}
          className="shrink-0 text-xs py-1.5 px-3 border-red-300 text-red-800 hover:bg-red-100 focus:ring-red-500 w-full sm:w-auto"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}

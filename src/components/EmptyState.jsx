import React from 'react';
import Button from './Button';

/**
 * Clean EmptyState component with icon placeholder, heading, description, and optional action.
 */
export default function EmptyState({
  title = 'No information found',
  description = 'There are no records or data available to display right now.',
  actionLabel,
  onAction,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-xl bg-stone-50/70 border border-dashed border-stone-300 ${className}`.trim()}
    >
      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3.5 shadow-2xs">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M3.75 5.25h16.5"
          />
        </svg>
      </div>

      <h3 className="text-base font-semibold text-stone-900 tracking-tight">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-stone-600 max-w-sm leading-relaxed">{description}</p>
      )}

      {actionLabel && onAction && (
        <div className="mt-5">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

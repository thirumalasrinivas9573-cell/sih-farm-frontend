import React from 'react';

/**
 * Clean Card container component with optional title header and footer slot.
 */
export default function Card({ title, children, footer, className = '', ...props }) {
  return (
    <div
      className={`bg-white border border-stone-200/90 rounded-xl shadow-xs overflow-hidden ${className}`.trim()}
      {...props}
    >
      {title && (
        <div className="px-5 py-4 border-b border-stone-100 bg-stone-50/50">
          <h3 className="text-base font-semibold text-stone-900 tracking-tight">{title}</h3>
        </div>
      )}

      <div className="p-5 text-stone-700">{children}</div>

      {footer && (
        <div className="px-5 py-3.5 bg-stone-50/80 border-t border-stone-100 text-sm text-stone-600">
          {footer}
        </div>
      )}
    </div>
  );
}

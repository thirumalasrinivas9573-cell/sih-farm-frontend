import React, { useEffect } from 'react';

/**
 * Accessible Modal dialog with overlay click and Escape key listener.
 */
export default function Modal({ isOpen, onClose, title, children, className = '' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={`relative w-full max-w-lg bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col ${className}`.trim()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 bg-stone-50/50">
          {title ? (
            <h2 id="modal-title" className="text-lg font-semibold text-stone-900">
              {title}
            </h2>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto text-stone-700 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

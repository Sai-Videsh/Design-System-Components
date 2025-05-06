import React, { useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { ToastProps } from './types';

const typeClasses = {
  info: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  error: 'bg-red-500 text-white',
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type = 'info',
  title,
  message,
  duration = 5000,
  onClose,
  className,
}) => {
  useEffect(() => {
    if (duration !== Infinity && duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'rounded-md p-4 flex flex-col gap-1 shadow-md pointer-events-auto',
        typeClasses[type],
        className,
      )}
      role="alert"
      aria-labelledby={`toast-${id}-title`}
      aria-describedby={`toast-${id}-message`}
    >
      {title && (
        <span id={`toast-${id}-title`} className="font-semibold">
          {title}
        </span>
      )}
      <div className="flex justify-between items-center">
        <span id={`toast-${id}-message`}>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
          aria-label="Close toast"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';
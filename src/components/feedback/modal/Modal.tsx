import React, { useEffect } from 'react';
import { cn } from '../../../utils/cn';

export interface ModalProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal: React.FC<ModalProps> = ({
  size = 'md',
  title,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  isOpen,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeOnEsc, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={cn(
          'bg-white rounded-lg shadow-lg p-6',
          sizeClasses[size],
          'w-full',
          className,
        )}
        role="dialog"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-modal="true"
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-lg font-semibold">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
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
        )}
        <div>{children}</div>
      </div>
      {closeOnOverlayClick && (
        <div
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

Modal.displayName = 'Modal';
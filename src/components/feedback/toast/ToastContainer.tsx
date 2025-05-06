import React from 'react';
import { Toast } from './Toast';
import { useToast } from './ToastContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();
  
  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex flex-col items-end px-4 py-6 pointer-events-none sm:p-6 z-50 gap-3"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
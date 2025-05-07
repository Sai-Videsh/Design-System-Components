import React, { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../../utils/cn';
import { HelperText } from '../typography/HelperText';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      className,
      size = 'md',
      indeterminate = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || `checkbox-${uuidv4()}`;
    
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
    
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);
    
    const sizeClasses = {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    };
    
    const labelSizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            className={cn(
              'form-checkbox rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
              sizeClasses[size],
              error
                ? 'border-red-500 text-red-500 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 text-blue-500 focus:border-blue-500 focus:ring-blue-200',
              disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed',
              className
            )}
            aria-invalid={error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                labelSizeClasses[size],
                disabled && 'text-gray-400 cursor-not-allowed'
              )}
            >
              {label}
            </label>
          )}
        </div>
        {(error && errorMessage) && (
          <HelperText id={`${inputId}-error`} className="text-red-500">
            {errorMessage}
          </HelperText>
        )}
        {(!error && helperText) && (
          <HelperText id={`${inputId}-helper`}>
            {helperText}
          </HelperText>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
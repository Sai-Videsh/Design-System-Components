import React, { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../../utils/cn';
import { Label } from '../typography/Label';
import { HelperText } from '../typography/HelperText';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-2.5 px-5 text-lg',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      startIcon,
      endIcon,
      fullWidth,
      inputSize = 'md',
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const inputId = `id-${uuidv4()}`;
      return (
      <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <Label htmlFor={inputId} className={cn(disabled && 'text-gray-400')}>
            {label}
          </Label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">{startIcon}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'border rounded-md focus:outline-none focus:ring-2 transition-colors',
              sizeClasses[inputSize],
              startIcon ? 'pl-10' : '',
              endIcon ? 'pr-10' : '',
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200',
              disabled && 'bg-gray-100 cursor-not-allowed',
              className,
            )}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={
              error && errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">{endIcon}</div>
          )}
        </div>
        {(error && errorMessage) && (
          <HelperText id={`${inputId}-error`} className="text-red-500">
            {errorMessage}
          </HelperText>
        )}
        {(!error && helperText) && (
          <HelperText id={`${inputId}-helper`}>{helperText}</HelperText>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
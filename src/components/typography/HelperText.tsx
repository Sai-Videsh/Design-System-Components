import React from 'react';
import { cn } from '../../utils/cn';
import { TypographyProps } from './Typography';

export interface HelperTextProps extends Omit<TypographyProps, 'variant'> {
  id?: string; // Added to support accessibility
  className?: string;
}

export const HelperText: React.FC<HelperTextProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <span
      id={id}
      className={cn('text-sm', className)}
      {...props}
    >
      {children}
    </span>
  );
};

HelperText.displayName = 'HelperText';
import React from 'react';
import { cn } from '../../utils/cn';
import { TypographyProps } from './Typography';

export interface LabelProps extends Omit<TypographyProps, 'variant'> {
  htmlFor?: string; // Added to support form label accessibility
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('text-sm font-medium', className)}
      {...props}
    >
      {children}
    </label>
  );
};

Label.displayName = 'Label';
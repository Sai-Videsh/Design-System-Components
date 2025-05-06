import React from 'react';
import { cn } from '../../utils/cn';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'label' | 'helper';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'disabled';
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  weight = 'normal',
  align = 'left',
  color = 'primary',
  className,
  children,
  as,
  ...props
}) => {
  const variantClasses = {
    h1: 'text-5xl font-bold leading-tight',
    h2: 'text-4xl font-bold leading-tight',
    h3: 'text-3xl font-bold leading-tight',
    h4: 'text-2xl font-semibold leading-snug',
    h5: 'text-xl font-semibold leading-snug',
    h6: 'text-lg font-semibold leading-snug',
    body1: 'text-base font-normal leading-normal',
    body2: 'text-sm font-normal leading-normal',
    caption: 'text-xs font-normal leading-normal',
    label: 'text-sm font-medium leading-tight',
    helper: 'text-xs font-normal leading-normal',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const colorClasses = {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    disabled: 'text-gray-400 dark:text-gray-500',
  };

  const Component = as || (variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : variant === 'h4' ? 'h4' : variant === 'h5' ? 'h5' : variant === 'h6' ? 'h6' : variant === 'label' ? 'label' : 'p');

  return (
    <Component
      className={cn(
        variantClasses[variant],
        weightClasses[weight],
        alignClasses[align],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
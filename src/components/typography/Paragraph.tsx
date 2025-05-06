import React from 'react';
import { Typography, TypographyProps } from './Typography';

export interface ParagraphProps extends Omit<TypographyProps, 'variant'> {
  size?: 'small' | 'medium';
}

export const Paragraph: React.FC<ParagraphProps> = ({ size = 'medium', ...props }) => {
  const variant = size === 'small' ? 'body2' : 'body1';
  return <Typography variant={variant} {...props} />;
};
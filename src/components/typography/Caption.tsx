import React from 'react';
import { Typography, TypographyProps } from './Typography';

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => {
  return <Typography variant="caption" {...props} />;
};
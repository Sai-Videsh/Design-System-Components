import React from 'react';
import { useGlobals } from '@storybook/client-api';
import { ThemeProvider } from '../src/themes/ThemeContext';

export const ThemeDecorator = (Story) => {
  const [{ theme }] = useGlobals();
  const currentTheme = theme || 'light';
  
  return (
    <ThemeProvider initialTheme={currentTheme}>
      <div className={currentTheme}>
        <div className="p-4 transition-colors duration-200" style={{ minHeight: '100vh' }}>
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};
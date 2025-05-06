import '../src/index.css';
import { themes } from '@storybook/theming';
import { ThemeDecorator } from './ThemeDecorator';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [ThemeDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
  options: {
    storySort: {
      order: [
        'Design System',
        ['Introduction', 'Typography', 'Data Entry', 'Feedback'],
      ],
    },
  },
};
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HelperText, HelperTextProps } from './HelperText';

const meta: Meta<HelperTextProps> = {
  title: 'Design System/Typography/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the helper text',
    },
    id: {
      control: 'text',
      description: 'ID for accessibility',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<HelperTextProps>;

export const Default: Story = {
  args: {
    children: 'Helper Text Example',
    id: 'helper-text-id',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Helper Text Example',
    id: 'helper-text-secondary',
  },
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses semantic HTML element
- Supports text sizing
- Maintains readability with appropriate line height
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <HelperText id="helper-text-1">Helper Text Example</HelperText>
      <HelperText id="helper-text-2">Secondary Helper Text Example</HelperText>
    </div>
  ),
};
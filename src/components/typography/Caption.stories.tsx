import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';
import { TypographyProps } from './Typography';

const meta: Meta<Omit<TypographyProps, 'variant'>> = {
  title: 'Design System/Typography/Caption',
  component: Caption,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the caption',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled'],
      description: 'Text color',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    as: {
      control: 'text',
      description: 'Custom element type',
    },
  },
};

export default meta;
type Story = StoryObj<Omit<TypographyProps, 'variant'>>;

export const Default: Story = {
  args: {
    children: 'Caption Example',
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
      <Caption>Caption Example</Caption>
    </div>
  ),
};
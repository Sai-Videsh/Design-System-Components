import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';

const meta: Meta<ParagraphProps> = {
  title: 'Design System/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Paragraph size',
    },
    children: {
      control: 'text',
      description: 'Content of the paragraph',
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
type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
  args: {
    children: 'Paragraph Example',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Paragraph',
    size: 'small',
  },
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses semantic HTML elements
- Supports responsive text sizing
- Maintains readability with appropriate line heights
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <Paragraph size="small">Small Paragraph</Paragraph>
      <Paragraph size="medium">Medium Paragraph</Paragraph>
    </div>
  ),
};
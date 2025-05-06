import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

const meta: Meta<HeadingProps> = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'Content of the heading',
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
type Story = StoryObj<HeadingProps>;

export const Default: Story = {
  args: {
    children: 'Heading Example',
    level: 1,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses proper heading hierarchy (h1-h6)
- Maintains appropriate font sizes for readability
- Ensures proper color contrast
- Uses semantic HTML elements
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Primary Heading</Heading>
      <Heading level={2}>Secondary Heading</Heading>
      <Heading level={3}>Tertiary Heading</Heading>
    </div>
  ),
};
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';

const meta: Meta<TypographyProps> = {
  title: 'Design System/Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body Search for h1, h2, h3, h4, h5, h6, body1, body2, caption, label, helper in all files1', 'body2', 'caption', 'label', 'helper'],
      description: 'Typography variant',
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
    children: {
      control: 'text',
      description: 'Content of the typography',
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
type Story = StoryObj<TypographyProps>;

export const Default: Story = {
  args: {
    children: 'Typography Example',
    variant: 'body1',
    weight: 'normal',
    align: 'left',
    color: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1 - Main text paragraph</Typography>
      <Typography variant="body2">Body 2 - Secondary text paragraph</Typography>
      <Typography variant="caption">Caption - Small text for captions</Typography>
      <Typography variant="label">Label - Text for form labels</Typography>
      <Typography variant="helper">Helper - Text for helper messages</Typography>
    </div>
  ),
};

export const WeightVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="disabled">Disabled color text</Typography>
    </div>
  ),
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses semantic HTML elements based on the variant
- Ensures proper color contrast for all text variants
- Supports responsive text sizing
- Maintains readability with appropriate line heights
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8">
      <div className="p-4 bg-white">
        <Typography color="primary">Text on light background</Typography>
        <Typography color="secondary">Secondary text on light background</Typography>
      </div>
      <div className="p-4 bg-gray-900">
        <Typography color="primary">Text on dark background</Typography>
        <Typography color="secondary">Secondary text on dark background</Typography>
      </div>
    </div>
  ),
};
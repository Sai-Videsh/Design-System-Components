import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

const meta: Meta<LabelProps> = {
  title: 'Design System/Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the label',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the associated form element',
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
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Label Example',
    htmlFor: 'input-id',
  },
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses semantic HTML label element
- Supports text sizing
- Maintains readability with appropriate line height
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <Label htmlFor="input-id">Label Example</Label>
    </div>
  ),
};
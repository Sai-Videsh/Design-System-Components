import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Design System/Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: true,
    errorMessage: 'You must accept the terms and conditions',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small checkbox" size="sm" />
      <Checkbox label="Medium checkbox" size="md" />
      <Checkbox label="Large checkbox" size="lg" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses native HTML checkbox for maximum compatibility
- Properly associates labels with inputs
- Supports keyboard navigation
- Includes ARIA attributes for states (checked, indeterminate, disabled)
- Error messages are linked with aria-describedby

### Keyboard Support

| Key | Function |
| --- | --- |
| Tab | Moves focus to the checkbox |
| Space | Toggles the checkbox state |
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Standard checkbox" />
      <Checkbox label="Checkbox with error" error={true} errorMessage="This field is required" />
      <Checkbox label="Indeterminate checkbox" indeterminate={true} />
    </div>
  ),
};
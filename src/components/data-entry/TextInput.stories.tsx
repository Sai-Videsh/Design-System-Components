import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';

const meta: Meta<TextInputProps> = {
  title: 'Design System/Data Entry/TextInput',
  component: TextInput as React.ComponentType<TextInputProps>, // Explicitly type component
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
    },
    error: {
      control: 'boolean',
      description: 'Indicates if the input has an error',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when error is true',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the input take full width',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    startIcon: {
      control: 'object',
      description: 'Icon to display at the start of the input',
    },
    endIcon: {
      control: 'object',
      description: 'Icon to display at the end of the input',
    },
  },
};

export default meta;
type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    inputSize: 'md',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Password must be at least 8 characters',
    inputSize: 'md',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: true,
    errorMessage: 'Invalid email address',
    inputSize: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    disabled: true,
    value: 'johndoe',
    inputSize: 'md',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    endIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    inputSize: 'md',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    placeholder: 'This input takes up the full width',
    fullWidth: true,
    inputSize: 'md',
  },
};
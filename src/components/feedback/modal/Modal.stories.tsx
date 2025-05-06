import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta<ModalProps> = {
  title: 'Design System/Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the modal',
    },
    title: {
      control: 'text',
      description: 'Title of the modal',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Closes modal when pressing Esc key',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Closes modal when clicking the overlay',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal is closed',
    },
    children: {
      control: 'text',
      description: 'Content of the modal',
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'Modal Title',
    size: 'md',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isOpen: true,
    children: 'This is the modal content.',
  },
};

export const Small: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'Small Modal',
    size: 'sm',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isOpen: true,
    children: 'This is a small modal.',
  },
};

export const Large: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'Large Modal',
    size: 'lg',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isOpen: true,
    children: 'This is a large modal.',
  },
};

export const ExtraLarge: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'Extra Large Modal',
    size: 'xl',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isOpen: true,
    children: 'This is an extra large modal.',
  },
};

export const NoCloseOnEsc: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'No Esc Close Modal',
    size: 'md',
    closeOnEsc: false,
    closeOnOverlayClick: true,
    isOpen: true,
    children: 'This modal cannot be closed with Esc.',
  },
};

export const NoOverlayClose: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'No Overlay Close Modal',
    size: 'md',
    closeOnEsc: true,
    closeOnOverlayClick: false,
    isOpen: true,
    children: 'This modal cannot be closed by clicking the overlay.',
  },
};

export const CustomContent: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    title: 'Custom Content Modal',
    size: 'md',
    closeOnEsc: true,
    closeOnOverlayClick: true,
    isOpen: true,
    children: (
      <div>
        <p>Custom content here.</p>
        <button onClick={() => alert('Action!')}>Click Me</button>
      </div>
    ),
  },
};
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from '.';
import { ToastProvider, useToast } from './ToastContext';
import { ToastContainer } from './ToastContainer';
import { Button } from '../../data-entry/Button';

const meta: Meta<ToastProps> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the toast',
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of the toast notification',
    },
    title: {
      control: 'text',
      description: 'Title of the toast',
    },
    message: {
      control: 'text',
      description: 'Message content of the toast',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before the toast auto-closes (Infinity for persistent toasts)',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the toast is closed',
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    id: '1',
    type: 'info',
    message: 'This is an informational message',
    onClose: () => {},
  },
};

export const WithTitle: Story = {
  args: {
    id: '2',
    type: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully',
    onClose: () => {},
  },
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        id="info"
        type="info"
        title="Information"
        message="This is an informational message"
        onClose={() => {}}
      />
      <Toast
        id="success"
        type="success"
        title="Success"
        message="Operation completed successfully"
        onClose={() => {}}
      />
      <Toast
        id="warning"
        type="warning"
        title="Warning"
        message="This action might have consequences"
        onClose={() => {}}
      />
      <Toast
        id="error"
        type="error"
        title="Error"
        message="An error occurred while processing your request"
        onClose={() => {}}
      />
    </div>
  ),
};

// Interactive example
const ToastDemo = () => {
  const { addToast } = useToast();
  
  const showToast = (type: 'info' | 'success' | 'warning' | 'error') => {
    addToast({
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      message: `This is a ${type} message`,
    });
  };
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button onClick={() => showToast('info')}>Show Info</Button>
        <Button onClick={() => showToast('success')}>Show Success</Button>
        <Button onClick={() => showToast('warning')}>Show Warning</Button>
        <Button onClick={() => showToast('error')}>Show Error</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <ToastDemo />,
};

export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Considerations

- Uses role="alert" for screen reader announcement
- Uses aria-live="assertive" for immediate announcement
- Includes close button with proper labeling
- Provides visual distinction between different toast types
- Animations respect reduced motion preferences

### Keyboard Support

| Key | Function |
| --- | --- |
| Tab | Focuses the close button |
| Enter/Space | Activates the close button when focused |
| Escape | Closes the toast (when implemented) |
        `,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        id="accessibility-example"
        type="info"
        title="Accessibility Example"
        message="This toast is designed with accessibility in mind"
        onClose={() => {}}
      />
    </div>
  ),
};
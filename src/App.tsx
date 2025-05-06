import React from 'react';
import { Heading } from './components/typography/Heading';
import { Paragraph } from './components/typography/Paragraph';
import { TextInput } from './components/data-entry/TextInput';
import { Checkbox } from './components/data-entry/Checkbox';
import { ToastProvider, useToast } from './components/feedback/toast/ToastContext';
import { ToastContainer } from './components/feedback/toast/ToastContainer';
import { useTheme } from './themes/ThemeContext';

function App() {
  const { mode, toggleTheme } = useTheme();
  const { addToast } = useToast();

  const showToast = (type: 'info' | 'success' | 'warning' | 'error') => {
    addToast({
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      message: `This is a ${type} message`,
    });
  };

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Heading level={1}>Design System</Heading>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        <section className="mb-12">
          <Heading level={2} className="mb-4">Typography</Heading>
          <div className="space-y-4">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
            <Paragraph>This is a paragraph with normal text.</Paragraph>
            <Paragraph size="small">This is a small paragraph.</Paragraph>
          </div>
        </section>

        <section className="mb-12">
          <Heading level={2} className="mb-4">Data Entry</Heading>
          <div className="space-y-6">
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              helperText="We'll never share your email with anyone else."
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              error={true}
              errorMessage="Password must be at least 8 characters long"
            />
            <Checkbox
              label="Remember me"
              helperText="Save your login information for next time"
            />
          </div>
        </section>

        <section className="mb-12">
          <Heading level={2} className="mb-4">Feedback</Heading>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => showToast('info')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Show Info Toast
              </button>
              <button
                onClick={() => showToast('success')}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Show Success Toast
              </button>
              <button
                onClick={() => showToast('warning')}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              >
                Show Warning Toast
              </button>
              <button
                onClick={() => showToast('error')}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Show Error Toast
              </button>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

function AppWithProviders() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}

export default AppWithProviders;

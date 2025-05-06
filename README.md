Typography Design System
This project is a Typography Design System built for the Front End Developer Assignment. It includes a set of reusable typography components designed for enterprise applications, created using React, TypeScript, TailwindCSS, and Storybook. The components are documented in Storybook, support theming (light/dark mode), ensure accessibility, and are responsive across devices.
Project Overview
The goal of this assignment was to build a scalable design system with a focus on typography components. This project implements the Foundational Element: Typography as specified, including:

Components: Heading (H1-H6), Paragraph, Label, Caption, and Helper Text.
Features:
TypeScript for type-safe props.
TailwindCSS for styling, with support for light/dark mode theming.
Storybook for interactive documentation, showcasing variants, states, and accessibility notes.
Accessible design with semantic HTML, ARIA roles, and high-contrast text.
Responsive layouts for mobile and desktop.


Deployment: Storybook is deployed to Chromatic (preferred) with an optional backup on Vercel.
Screenshots: Included to showcase component visuals.

This project demonstrates an understanding of component architecture, theming, accessibility, and Storybook documentation practices, as outlined in the assignment objectives.
Components
The typography system includes the following components, all located in src/components/typography/:

Heading (Heading.tsx):

Supports H1-H6 levels (level: 1 | 2 | 3 | 4 | 5 | 6).
Customizable font weight, alignment, and color.
Uses semantic <h1> to <h6> tags for accessibility.
Storybook: Shows all levels, weights, and alignments.


Paragraph (Paragraph.tsx):

Supports small and medium sizes (size: 'small' | 'medium').
Customizable font weight, alignment, and color.
Uses semantic <p> tags.
Storybook: Shows size variants and accessibility notes.


Label (Label.tsx):

Designed for form field labels with htmlFor prop for accessibility.
Customizable font weight and alignment.
Uses semantic <label> tags.
Storybook: Shows usage with form inputs.


Caption (Caption.tsx):

Small text for descriptions or annotations.
Customizable font weight, alignment, and color.
Uses semantic <span> tags.
Storybook: Shows caption examples.


Helper Text (HelperText.tsx):

Hints or error messages for form fields with id prop for accessibility.
Customizable font weight and alignment.
Uses semantic <span> tags.
Storybook: Shows helper text with form fields.


Typography (Typography.tsx):

A base component that powers all other typography components.
Supports variants (h1, h2, ..., body1, body2, caption, label, helper).
Customizable font weight, alignment, color, and element type (as prop).
Storybook: Shows all variants and theming options.


Folders:
src/components/typography/: Contains all typography components and their TypeScript interfaces.
src/stories/: Contains Storybook stories for each component, documenting variants, states, and accessibility.
src/utils/: Includes a cn.ts utility for combining TailwindCSS classes.
screenshots/: Stores images of components for submission.
.storybook/: Configures Storybook settings.
tailwind.config.js: Configures TailwindCSS for theming (e.g., light/dark mode).
tsconfig.json: Configures TypeScript settings.

Setup Instructions
To run the project locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/my-design-system.git
cd my-design-system


Install Dependencies:

Ensure you have Node.js installed (version 14 or higher recommended).
Install packages using npm or Yarn:npm install

Or:yarn install




Run Storybook:

Start the Storybook development server:npm run storybook

Or:yarn storybook


Open your browser at http://localhost:6006 to view the Storybook interface with all typography components.


Build Storybook (Optional for you):

To generate a static Storybook build (e.g., for deployment):npm run build-storybook

Or:yarn build-storybook


This creates a storybook-static/ folder.



Deployment
The Storybook is deployed to Chromatic (preferred, as specified in the assignment) with an optional backup on Vercel for accessibility.

Chromatic:

URL: https://random-uuid.chromatic.com (replace with your actual Chromatic URL after deployment).
Deployment is automated via a GitHub Action (see .github/workflows/chromatic.yml).
Each push to the main branch triggers a new deployment, ensuring the latest components are available.
Access is restricted to invited users (synced with GitHub repo permissions).


Vercel (Optional):

URL: https://my-design-system.vercel.app (replace with your actual Vercel URL if deployed).
Deployed as a static site using the storybook-static output.
Publicly accessible for easy sharing.



To deploy yourself, follow the instructions in the Chromatic or Vercel sections below.
Chromatic Deployment

Install Chromatic CLI:npm install --save-dev chromatic


Deploy with your project token (obtained from Chromatic):npx chromatic --project-token=<your-project-token>


Continuous deployment is set up via .github/workflows/chromatic.yml.

Vercel Deployment

Push the project to GitHub.
Import the repository in Vercel’s dashboard (https://vercel.com).
Set:
Build Command: npm run build-storybook
Output Directory: storybook-static


Deploy to get a public URL.

Storybook Documentation
Each component in Storybook includes:

Name and Description: E.g., “Heading: Displays H1-H6 titles.”
Props / API: Lists all props (e.g., level, weight, children).
Use Cases: Examples like <Heading level={1}>Title</Heading>.
Anatomy / Structure: Explains HTML tags (e.g., <h1> for Heading).
States & Variants: Shows weights, alignments, and sizes.
Interaction Behavior: Describes keyboard navigation (e.g., tab focus).
Accessibility Notes: Details ARIA roles and contrast ratios.
Theming / Responsiveness: Demonstrates light/dark mode and mobile views.
Do’s and Don’ts: Best practices (e.g., “Use one H1 per page”).

Open Storybook (npm run storybook) or visit the deployed URL to explore the documentation.
Accessibility Features
The typography components are designed with accessibility in mind:

Semantic HTML: Uses correct tags (e.g., <h1>, <label>, <p>).
ARIA Roles: Includes aria-label and aria-invalid where applicable (e.g., HelperText with id).
High Contrast: Text colors meet WCAG 2.1 contrast ratios.
Keyboard Navigation: Components are focusable via Tab key.
Responsive Text: Font sizes scale for zoom and mobile devices.

Accessibility notes are included in each component’s Storybook story under the “Accessibility” tab.
Theming
The components support light/dark mode using TailwindCSS’s dark: prefix:

Light mode: Dark text on light backgrounds (e.g., text-gray-900 bg-white).
Dark mode: Light text on dark backgrounds (e.g., dark:text-white dark:bg-gray-900).
Brand tokens (e.g., primary, secondary colors) are defined in tailwind.config.js.

To test theming, toggle your browser’s dark mode or use Storybook’s theme switcher.
Screenshots
Screenshots of each component are included in the screenshots/ folder:

heading.png: Shows Heading levels H1-H6.
paragraph.png: Shows Paragraph with small and medium sizes.
label.png: Shows Label with a form input.
caption.png: Shows Caption examples.
helper-text.png: Shows Helper Text with a form field.

These screenshots are also visible in the deployed Storybook for interactive exploration.
Submission Details
As per the assignment’s submission guidelines, the following are provided:

GitHub Repository: https://github.com/your-username/my-design-system (replace with your actual repo URL).
Storybook Preview Link:
Chromatic (preferred): https://random-uuid.chromatic.com (replace with your actual URL).
Vercel (optional): https://my-design-system.vercel.app (replace with your actual URL if deployed).


Screenshots: Available in the screenshots/ folder or via the Storybook URLs.

Notes for Reviewers
This project focuses on the Typography part of the assignment, implementing all required components (Heading, Paragraph, Label, Caption, Helper Text). The components are fully functional, type-safe, accessible, and documented in Storybook. If additional Data Entry or Feedback components are required, please let me know, and I can extend the system.
Thank you for reviewing my work! Please reach out with any feedback or questions.

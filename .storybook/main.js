module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/preset-create-react-app',
      options: {},
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom/client': 'react-dom',
    };
    // Soften ESLint errors to warnings
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.use && rule.use.some((use) => use.loader && use.loader.includes('eslint-loader'))) {
        return {
          ...rule,
          use: rule.use.map((use) => ({
            ...use,
            options: { ...use.options, emitError: false, emitWarning: true },
          })),
        };
      }
      return rule;
    });
    return config;
  },
};
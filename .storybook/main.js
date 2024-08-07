const path = require('path');
module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-styled-component-theme/dist/preset",
    "@whitespace/storybook-addon-html"
  ],
  typescript: "react-docgen-typescript-plugin"
};

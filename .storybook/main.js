module.exports = {
  "stories": [
    "../src/presentation/**/*.stories.mdx",
    "../src/presentation/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "previewMdx2": true
  }
}
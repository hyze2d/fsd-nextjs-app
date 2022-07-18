import { withDesign } from "storybook-addon-designs";

import { StorybookProvider } from "../src/shared/lib/storybook";


import "../src/app/styles/global.scss";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "light"
  },
};

export const decorators = [withDesign, Story =>
  <StorybookProvider>
    <Story />
  </StorybookProvider>
];


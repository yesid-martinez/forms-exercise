/** @type { import('@storybook/react').Preview } */

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "480px",
      height: "700px",
    },
  },
  iPads: {
    name: "iPads, tablets",
    styles: {
      width: "768px",
      height: "900px",
    },
  },

  laptops: {
    name: "Laptops",
    styles: {
      width: "1400px",
      height: "790px",
    },
  },
  desktops: {
    name: "Desktops",
    styles: {
      width: "1600px",
      height: "1050px",
    },
  },
  tv:{
    name: "Large screens, TV",
    styles: {
      width: "2360px",
      height: "1400px",
    },
  },
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;

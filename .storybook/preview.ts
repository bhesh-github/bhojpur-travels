import type { Preview } from "@storybook/react";
import "app/globals.css";
import "assets/styles/main.scss";

const BREAKPOINTS_INT = {
  ["xs [mobile]"]: 375,
  ["sm [Tablet]"]: 600,
  ["md [Tablet Landscape]"]: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  }),
);

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props: any) => (
//     <OriginalNextImage
//       {...props}
//       unoptimized
//     />
//   ),
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: { viewports: customViewports },
    layout: "fullscreen",
  },
};

export default preview;

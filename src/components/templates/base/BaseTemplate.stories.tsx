import type { Meta, StoryObj } from "@storybook/react";
import BaseTemplateComponent from "components/templates/base/BaseTemplate";

const meta: Meta<typeof BaseTemplateComponent> = {
  title: "Template/Base",
  component: BaseTemplateComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BaseTemplateComponent>;

export const Base: Story = {
  args: {
    stringProps: "This is the Base Template!!",
  },
};

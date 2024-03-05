import { Meta, StoryObj } from "@storybook/react";
import CatCard from "components/templates/cards/CatCard/CatCard";
import { mockCatCardProps } from "components/templates/cards/CatCard/catCard.mocks";

const meta: Meta<typeof CatCard> = {
  title: "Template/Components/Cards/CatCard",
  component: CatCard,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CatCard>;

export const Cat: Story = {
  args: {
    ...mockCatCardProps.base,
  },
};

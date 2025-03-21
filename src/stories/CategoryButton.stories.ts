import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "UI/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    iconAlt: { control: "text", description: "이미지의 대체 텍스트" },
    text: { control: "text", description: "버튼 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assets: Story = {
  args: {
    iconPath: "/icons/ic-asset-delete-dark.svg",
    iconAlt: "icon",
    text: "Category",
  },
};

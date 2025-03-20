import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import IconButton from "../components/IconButton";

import icAssetsDeleteDark from "../assets/ic-asset-delete-dark.svg";

const meta = {
  title: "UI/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    alt: { control: "text", description: "이미지의 대체 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assets: Story = {
  args: {
    iconPath: icAssetsDeleteDark,
    alt: "icon",
  },
};

export const Public: Story = {
  args: {
    iconPath: "/ic-public-delete-dark.svg",
    alt: "icon",
  },
};

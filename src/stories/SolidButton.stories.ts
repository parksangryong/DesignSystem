import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SolidButton from "../components/SolidButton";

const meta = {
  title: "UI/SolidButton",
  component: SolidButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "버튼 레이블" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼 크기",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SolidButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    onClick: fn(),
  },
};

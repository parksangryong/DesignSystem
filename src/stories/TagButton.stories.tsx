import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagButton from "../components/TagButton";

const meta = {
  title: "UI/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] flex justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 레이블" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isChecked: { control: "boolean", description: "버튼 체크 여부" },
  },
  args: { onClick: fn(), isChecked: false },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotChecked: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    isChecked: false,
  },
};

export const Checked: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    isChecked: true,
  },
};

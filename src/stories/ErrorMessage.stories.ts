import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "UI/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "레이블 텍스트" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "에러 메시지는 여기로",
  },
};

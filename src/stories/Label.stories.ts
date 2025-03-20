import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "레이블 연결 요소의 id" },
    children: { control: "text", description: "레이블 텍스트" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    htmlFor: "email",
    children: "이메일",
  },
};

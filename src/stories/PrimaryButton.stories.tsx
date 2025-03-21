import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "UI/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 레이블" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼 테마",
    },
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
  },
  args: { onClick: fn(), isDisabled: false },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    theme: "dark",
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    theme: "light",
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    theme: "social",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    theme: "text",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    theme: "dark",
    isDisabled: true,
  },
};

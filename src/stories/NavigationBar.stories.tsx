import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "UI/NavigationBar",
  component: NavigationBar,
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDark: { control: "boolean", description: "다크 모드 여부" },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
    },
    showCloseButton: { control: "boolean", description: "닫기 버튼 표시 여부" },
    showTitle: { control: "boolean", description: "제목 표시 여부" },
    title: { control: "text", description: "제목" },
    onBackButtonClick: {
      action: "backButtonClick",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "closeButtonClick",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "NavigationBar",
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
};

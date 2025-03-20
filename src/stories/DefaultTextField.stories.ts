import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "UI/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text", description: "에러 메시지" },
    iconPath: { control: "text", description: "아이콘 경로" },
    iconAlt: { control: "text", description: "아이콘 대체 텍스트" },
    placeholder: { control: "text", description: "플레이스홀더" },
    value: { control: "text", description: "텍스트 값" },
    onChange: { action: "onChange", description: "onChange 이벤트" },
    iconClick: { action: "iconClick", description: "아이콘 클릭 이벤트" },
    isError: { control: "boolean", description: "에러 여부" },
  },
  args: {
    onChange: fn(),
    iconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    errorMessage: "이메일을 입력해주세요.",
    iconPath: "/ic-public-delete-dark.svg",
    iconAlt: "icon",
    placeholder: "이메일을 입력해주세요.",
    value: "",
    isError: true,
  },
};

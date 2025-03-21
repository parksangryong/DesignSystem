import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagList from "../components/TagList";

const meta = {
  title: "UI/TagList",
  component: TagList,
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
    tagList: { control: "object", description: "태그 목록" },
    onTagClick: { action: "clicked", description: "태그 클릭 이벤트" },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["Tag1", "Tag2", "Tag3"],
    onTagClick: fn(),
  },
};

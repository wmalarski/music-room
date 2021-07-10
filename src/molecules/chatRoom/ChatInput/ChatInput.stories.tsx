import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatInput from "./ChatInput";

export default {
  title: "Molecules/ChatRoom/ChatInput",
  component: ChatInput,
  argTypes: { onSubmit: { action: "onSubmit" } },
} as ComponentMeta<typeof ChatInput>;

const Template: ComponentStory<typeof ChatInput> = (args) => (
  <ChatInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

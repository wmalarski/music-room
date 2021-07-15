import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatInputForm from "./ChatInputForm";

export default {
  title: "Molecules/ChatInput/ChatInputForm",
  component: ChatInputForm,
  argTypes: { onSubmit: { action: "onSubmit" } },
} as ComponentMeta<typeof ChatInputForm>;

const Template: ComponentStory<typeof ChatInputForm> = (args) => (
  <ChatInputForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

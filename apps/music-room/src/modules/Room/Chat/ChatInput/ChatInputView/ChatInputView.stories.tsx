import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatInputView from "./ChatInputView";

export default {
  title: "Molecules/ChatInput/ChatInputView",
  component: ChatInputView,
  argTypes: { onSubmit: { action: "onSubmit" } },
} as ComponentMeta<typeof ChatInputView>;

const Template: ComponentStory<typeof ChatInputView> = (args) => (
  <ChatInputView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onQueryChange: () => null,
  onSubmit: () => null,
  query: "",
};

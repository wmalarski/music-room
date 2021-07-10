import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatMessage from "./ChatMessage";

export default {
  title: "Molecules/ChatRoom/ChatMessage",
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <ChatMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: {
    created_at: new Date().toLocaleDateString(),
    data: { kind: "message#0.0.1", url: "URL" },
    id: 1,
    profile_id: 1,
  },
};

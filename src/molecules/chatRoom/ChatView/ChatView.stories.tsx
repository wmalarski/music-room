import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatView from "./ChatView";

export default {
  title: "Molecules/ChatRoom/ChatView",
  component: ChatView,
} as ComponentMeta<typeof ChatView>;

const Template: ComponentStory<typeof ChatView> = (args) => (
  <ChatView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    {
      created_at: new Date().toLocaleTimeString(),
      data: { kind: "message#0.0.1", url: "URL1" },
      id: 1,
      profile_id: 1,
      room_id: 1,
    },
    {
      created_at: new Date().toLocaleTimeString(),
      data: { kind: "message#0.0.1", url: "URL2" },
      id: 2,
      profile_id: 1,
      room_id: 1,
    },
  ],
};

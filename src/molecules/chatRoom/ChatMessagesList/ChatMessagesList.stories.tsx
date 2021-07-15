import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ChatMessagesList from "./ChatMessagesList";

export default {
  title: "Molecules/ChatRoom/ChatMessagesList",
  component: ChatMessagesList,
} as ComponentMeta<typeof ChatMessagesList>;

const Template: ComponentStory<typeof ChatMessagesList> = (args) => (
  <ChatMessagesList {...args} />
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

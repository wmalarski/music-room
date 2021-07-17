import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomsList from "./RoomsList";

export default {
  title: "Molecules/Rooms/RoomsList",
  component: RoomsList,
} as ComponentMeta<typeof RoomsList>;

const Template: ComponentStory<typeof RoomsList> = (args) => (
  <RoomsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  rooms: [
    {
      role_id: 1,
      author_id: 1,
      data: { kind: "room#0.0.1" },
      hash: "d",
      profile_id: 1,
      room_id: 1,
      room_name: "",
      user_id: "",
      name: "First",
      slug: "first",
      role: "user",
      avatar: null,
    },
    {
      role_id: 1,
      author_id: 1,
      data: { kind: "room#0.0.1" },
      name: "Second",
      slug: "second",
      hash: "d",
      profile_id: 1,
      room_id: 1,
      room_name: "",
      user_id: "",
      role: "user",
      avatar: null,
    },
  ],
};

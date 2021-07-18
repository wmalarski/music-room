import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomUsersList from "./RoomUsersList";

export default {
  title: "Molecules/RoomsUsers/RoomUsersList",
  component: RoomUsersList,
} as ComponentMeta<typeof RoomUsersList>;

const Template: ComponentStory<typeof RoomUsersList> = (args) => (
  <RoomUsersList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  members: [
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

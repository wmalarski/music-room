import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomUserListItem from "./RoomUserListItem";

export default {
  title: "Molecules/RoomUsers/RoomUserListItem",
  component: RoomUserListItem,
} as ComponentMeta<typeof RoomUserListItem>;

const Template: ComponentStory<typeof RoomUserListItem> = (args) => (
  <RoomUserListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  profile: {
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
};

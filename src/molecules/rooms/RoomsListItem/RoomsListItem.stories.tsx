import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomsListItem from "./RoomsListItem";

export default {
  title: "Molecules/Rooms/RoomsListItem",
  component: RoomsListItem,
} as ComponentMeta<typeof RoomsListItem>;

const Template: ComponentStory<typeof RoomsListItem> = (args) => (
  <RoomsListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  room: {
    author_id: 1,
    data: { kind: "room#0.0.1" },
    hash: "d",
    profile_id: 1,
    room_id: 1,
    room_name: "",
    user_id: "",
    name: "First",
    slug: "first",
  },
};

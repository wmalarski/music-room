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
      author_id: 1,
      data: { kind: "room#0.0.1" },
      id: 1,
      name: "First",
      slug: "first",
    },
    {
      author_id: 1,
      data: { kind: "room#0.0.1" },
      id: 2,
      name: "Second",
      slug: "second",
    },
  ],
};

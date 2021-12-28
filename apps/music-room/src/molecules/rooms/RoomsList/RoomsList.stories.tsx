import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMember } from "../../../services/utils/defaults";
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
  members: [
    {
      ...defaultMember,
      id: 1,
      profile_name: "First",
      room_slug: "first",
    },
    {
      ...defaultMember,
      id: 2,
      profile_name: "Second",
      room_slug: "second",
    },
  ],
};

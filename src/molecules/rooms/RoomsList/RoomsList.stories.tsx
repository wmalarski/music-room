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
      role_id: 1,
      name: "First",
      slug: "first",
    },
    {
      ...defaultMember,
      role_id: 2,
      name: "Second",
      slug: "second",
    },
  ],
  onRoomClick: () => null,
};

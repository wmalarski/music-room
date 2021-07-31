import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMember } from "../../../services/utils/defaults";
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
      ...defaultMember,
      name: "First",
      slug: "first",
      room_name: "RoomName1",
    },
    {
      ...defaultMember,
      name: "Second",
      slug: "second",
      room_name: "RoomName2",
    },
  ],
  onLoadMore: () => null,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

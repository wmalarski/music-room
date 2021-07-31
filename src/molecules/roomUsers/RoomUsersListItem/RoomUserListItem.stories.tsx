import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMember } from "../../../services/utils/defaults";
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
  member: defaultMember,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

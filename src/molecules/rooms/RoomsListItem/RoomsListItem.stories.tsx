import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMember } from "../../../services/utils/defaults";
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
  member: defaultMember,
  onClick: () => null,
};

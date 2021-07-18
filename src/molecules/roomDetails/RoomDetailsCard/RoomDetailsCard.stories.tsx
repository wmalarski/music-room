import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomDetailsCard from "./RoomDetailsCard";

export default {
  title: "Molecules/RoomDetails/RoomDetailsCard",
  component: RoomDetailsCard,
} as ComponentMeta<typeof RoomDetailsCard>;

const Template: ComponentStory<typeof RoomDetailsCard> = (args) => (
  <RoomDetailsCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

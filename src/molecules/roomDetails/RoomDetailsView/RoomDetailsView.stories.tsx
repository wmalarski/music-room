import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomDetailsView from "./RoomDetailsView";

export default {
  title: "Molecules/RoomDetails/RoomDetailsView",
  component: RoomDetailsView,
} as ComponentMeta<typeof RoomDetailsView>;

const Template: ComponentStory<typeof RoomDetailsView> = (args) => (
  <RoomDetailsView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

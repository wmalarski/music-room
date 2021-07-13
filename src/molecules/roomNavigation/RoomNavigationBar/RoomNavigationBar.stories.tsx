import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomNavigationBar from "./RoomNavigationBar";

export default {
  title: "Molecules/RoomNavigation/RoomNavigationBar",
  component: RoomNavigationBar,
} as ComponentMeta<typeof RoomNavigationBar>;

const Template: ComponentStory<typeof RoomNavigationBar> = (args) => (
  <RoomNavigationBar {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomFormView from "./RoomFormView";

export default {
  title: "Molecules/RoomForm/RoomFormView",
  component: RoomFormView,
} as ComponentMeta<typeof RoomFormView>;

const Template: ComponentStory<typeof RoomFormView> = (args) => (
  <RoomFormView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

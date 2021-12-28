import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomTemplate from "./RoomTemplate";

export default {
  title: "templates/RoomTemplate",
  component: RoomTemplate,
} as ComponentMeta<typeof RoomTemplate>;

const Template: ComponentStory<typeof RoomTemplate> = (args) => (
  <RoomTemplate {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  appTitle: "Title",
  bottom: "bottom",
  header: "Header",
  left: "left",
  right: "right",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import GuestHomeTemplate from "./GuestHomeTemplate";

export default {
  title: "templates/GuestHomeTemplate",
  component: GuestHomeTemplate,
} as ComponentMeta<typeof GuestHomeTemplate>;

const Template: ComponentStory<typeof GuestHomeTemplate> = (args) => (
  <GuestHomeTemplate {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  left: "Left",
  right: "Right",
};

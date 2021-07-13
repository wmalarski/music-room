import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NavigationBar from "./NavigationBar";

export default {
  title: "Molecules/Navigation/NavigationBar",
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};

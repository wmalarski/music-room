import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NavigationView from "./NavigationView";

export default {
  title: "Molecules/Navigation/NavigationView",
  component: NavigationView,
} as ComponentMeta<typeof NavigationView>;

const Template: ComponentStory<typeof NavigationView> = (args) => (
  <NavigationView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onHomeClicked: () => null,
  right: <p>Right</p>,
};

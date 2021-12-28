import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SettingsTemplate from "./SettingsTemplate";

export default {
  title: "templates/SettingsTemplate",
  component: SettingsTemplate,
} as ComponentMeta<typeof SettingsTemplate>;

const Template: ComponentStory<typeof SettingsTemplate> = (args) => (
  <SettingsTemplate {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  appTitle: "Title",
  center: "center",
  header: "header",
};

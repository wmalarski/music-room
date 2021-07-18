import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomSettingsForm from "./RoomSettingsForm";

export default {
  title: "Molecules/RoomSettings/RoomSettingsForm",
  component: RoomSettingsForm,
} as ComponentMeta<typeof RoomSettingsForm>;

const Template: ComponentStory<typeof RoomSettingsForm> = (args) => (
  <RoomSettingsForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

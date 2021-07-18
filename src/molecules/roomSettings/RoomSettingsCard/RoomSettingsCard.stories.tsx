import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomSettingsCard from "./RoomSettingsCard";

export default {
  title: "Molecules/RoomSettings/RoomSettingsCard",
  component: RoomSettingsCard,
} as ComponentMeta<typeof RoomSettingsCard>;

const Template: ComponentStory<typeof RoomSettingsCard> = (args) => (
  <RoomSettingsCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

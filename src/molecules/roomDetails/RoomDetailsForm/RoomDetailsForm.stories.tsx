import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RoomDetailsForm from "./RoomDetailsForm";

export default {
  title: "Molecules/RoomDetails/RoomDetailsForm",
  component: RoomDetailsForm,
} as ComponentMeta<typeof RoomDetailsForm>;

const Template: ComponentStory<typeof RoomDetailsForm> = (args) => (
  <RoomDetailsForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

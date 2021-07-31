import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultProfile } from "../../../services/utils/defaults";
import CreateRoomView from "./CreateRoomView";

export default {
  title: "Molecules/CreateRoom/CreateRoomView",
  component: CreateRoomView,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof CreateRoomView>;

const Template: ComponentStory<typeof CreateRoomView> = (args) => (
  <CreateRoomView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  profile: defaultProfile,
  error: null,
  isLoading: false,
  onSubmit: () => null,
};

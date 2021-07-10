import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CreateRoomForm from "./CreateRoomForm";

export default {
  title: "Molecules/CreateRoom/CreateRoomForm",
  component: CreateRoomForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof CreateRoomForm>;

const Template: ComponentStory<typeof CreateRoomForm> = (args) => (
  <CreateRoomForm {...args} />
);

export const Playground = Template.bind({});

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DeleteRoomView from "./DeleteRoomView";

export default {
  title: "Molecules/DeleteRoom/DeleteRoomView",
  component: DeleteRoomView,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof DeleteRoomView>;

const Template: ComponentStory<typeof DeleteRoomView> = (args) => (
  <DeleteRoomView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onClicked: () => null,
  role: "guest",
};

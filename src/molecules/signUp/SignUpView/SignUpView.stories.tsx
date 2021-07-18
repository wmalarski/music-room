import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpView from "./SignUpView";

export default {
  title: "Molecules/SignUp/SignUpView",
  component: SignUpView,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof SignUpView>;

const Template: ComponentStory<typeof SignUpView> = (args) => (
  <SignUpView {...args} />
);

export const Playground = Template.bind({});

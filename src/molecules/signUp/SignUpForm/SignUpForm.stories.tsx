import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpForm from "./SignUpForm";

export default {
  title: "Molecules/SignUp/SignUpForm",
  component: SignUpForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);

export const Playground = Template.bind({});

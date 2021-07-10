import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignInForm from "./SignInForm";

export default {
  title: "Molecules/SignIn/SignInForm",
  component: SignInForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
);

export const Playground = Template.bind({});

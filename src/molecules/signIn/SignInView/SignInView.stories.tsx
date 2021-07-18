import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignInView from "./SignInView";

export default {
  title: "Molecules/SignIn/SignInView",
  component: SignInView,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
} as ComponentMeta<typeof SignInView>;

const Template: ComponentStory<typeof SignInView> = (args) => (
  <SignInView {...args} />
);

export const Playground = Template.bind({});

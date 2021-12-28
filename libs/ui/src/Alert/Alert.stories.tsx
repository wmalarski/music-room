import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Alert from "./Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: "This is an error message!",
  severity: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "This is an warning message!",
  severity: "warning",
};

export const Info = Template.bind({});
Info.args = {
  children: "This is an info message!",
  severity: "info",
};

export const Success = Template.bind({});
Success.args = {
  children: "This is an success message!",
  severity: "success",
};

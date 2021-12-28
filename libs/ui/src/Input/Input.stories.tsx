import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: "Hello" };
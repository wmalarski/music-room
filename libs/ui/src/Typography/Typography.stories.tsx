import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Hello",
};

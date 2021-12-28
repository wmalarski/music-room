import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import UserHomeTemplate from "./UserHomeTemplate";

export default {
  title: "templates/UserHomeTemplate",
  component: UserHomeTemplate,
} as ComponentMeta<typeof UserHomeTemplate>;

const Template: ComponentStory<typeof UserHomeTemplate> = (args) => (
  <UserHomeTemplate {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  center: "center",
  header: "header",
  left: "left",
};

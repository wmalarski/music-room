import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProfileTemplate from "./ProfileTemplate";

export default {
  title: "templates/ProfileTemplate",
  component: ProfileTemplate,
} as ComponentMeta<typeof ProfileTemplate>;

const Template: ComponentStory<typeof ProfileTemplate> = (args) => (
  <ProfileTemplate {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  center: "center",
  header: "header",
};

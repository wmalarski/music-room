import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Layout from "./Layout";

export default {
  title: "Atoms/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Hello" };

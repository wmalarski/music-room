import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Link from "./Link";

export default {
  title: "atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  href: "/",
};

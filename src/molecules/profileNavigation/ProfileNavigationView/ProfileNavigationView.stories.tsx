import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProfileNavigationView from "./ProfileNavigationView";

export default {
  title: "Molecules/ProfileNavigation/ProfileNavigationView",
  component: ProfileNavigationView,
} as ComponentMeta<typeof ProfileNavigationView>;

const Template: ComponentStory<typeof ProfileNavigationView> = () => (
  <ProfileNavigationView />
);

export const Primary = Template.bind({});
Primary.args = {};

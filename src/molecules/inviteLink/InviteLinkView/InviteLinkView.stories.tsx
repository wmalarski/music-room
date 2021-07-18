import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InviteLinkView from "./InviteLinkView";

export default {
  title: "Molecules/InviteLink/InviteLinkView",
  component: InviteLinkView,
} as ComponentMeta<typeof InviteLinkView>;

const Template: ComponentStory<typeof InviteLinkView> = (args) => (
  <InviteLinkView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  link: "linkToSomewhere",
};

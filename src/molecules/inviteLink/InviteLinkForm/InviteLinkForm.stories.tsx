import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InviteLinkForm from "./InviteLinkForm";

export default {
  title: "Molecules/InviteLink/InviteLinkForm",
  component: InviteLinkForm,
} as ComponentMeta<typeof InviteLinkForm>;

const Template: ComponentStory<typeof InviteLinkForm> = (args) => (
  <InviteLinkForm {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  link: "linkToSomewhere",
};

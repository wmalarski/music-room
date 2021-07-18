import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InviteAcceptView from "./InviteAcceptView";

export default {
  title: "Molecules/InviteAccept/InviteAcceptView",
  component: InviteAcceptView,
  argTypes: { onAcceptClicked: { type: "action" } },
} as ComponentMeta<typeof InviteAcceptView>;

const Template: ComponentStory<typeof InviteAcceptView> = (args) => (
  <InviteAcceptView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  room: {
    author_id: 1,
    data: { kind: "room#0.0.1" },
    hash: "hash",
    id: 1,
    name: "Name",
    slug: "name",
  },
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InviteAcceptForm from "./InviteAcceptForm";

export default {
  title: "Molecules/InviteAccept/InviteAcceptForm",
  component: InviteAcceptForm,
  argTypes: { onAcceptClicked: { type: "action" } },
} as ComponentMeta<typeof InviteAcceptForm>;

const Template: ComponentStory<typeof InviteAcceptForm> = (args) => (
  <InviteAcceptForm {...args} />
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

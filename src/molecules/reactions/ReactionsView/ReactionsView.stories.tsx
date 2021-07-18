import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReactionsView from "./ReactionsView";

export default {
  title: "Molecules/Reactions/ReactionsView",
  component: ReactionsView,
} as ComponentMeta<typeof ReactionsView>;

const Template: ComponentStory<typeof ReactionsView> = (args) => (
  <ReactionsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  action: {
    created_at: new Date().toISOString(),
    dislike_at: null,
    id: 1,
    like_at: null,
    message_id: 1,
    profile_id: 1,
    updated_at: new Date().toISOString(),
  },
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReactionsButtons from "./ReactionsButtons";

export default {
  title: "Molecules/Reactions/ReactionsButtons",
  component: ReactionsButtons,
} as ComponentMeta<typeof ReactionsButtons>;

const Template: ComponentStory<typeof ReactionsButtons> = (args) => (
  <ReactionsButtons {...args} />
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

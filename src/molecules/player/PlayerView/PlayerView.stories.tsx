import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PlayerView from "./PlayerView";

export default {
  title: "Molecules/Player/PlayerView",
  component: PlayerView,
} as ComponentMeta<typeof PlayerView>;

const Template: ComponentStory<typeof PlayerView> = (args) => (
  <PlayerView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: {
    created_at: new Date().toLocaleDateString(),
    data: { kind: "message#0.0.1", url: "URL" },
    id: 1,
    profile_id: 1,
    room_id: 1,
  },
};

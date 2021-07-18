import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PlayerControlsView from "./PlayerControlsView";

export default {
  title: "Molecules/PlayerControls/PlayerControlsView",
  component: PlayerControlsView,
} as ComponentMeta<typeof PlayerControlsView>;

const Template: ComponentStory<typeof PlayerControlsView> = (args) => (
  <PlayerControlsView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  controls: {
    id: 1,
    muted: false,
    pause: false,
    room_id: 1,
    speaker_id: 1,
    volume: 1,
  },
};

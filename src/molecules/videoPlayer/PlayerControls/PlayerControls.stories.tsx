import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PlayerControls from "./PlayerControls";

export default {
  title: "Molecules/VideoPlayer/PlayerControls",
  component: PlayerControls,
} as ComponentMeta<typeof PlayerControls>;

const Template: ComponentStory<typeof PlayerControls> = (args) => (
  <PlayerControls {...args} />
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

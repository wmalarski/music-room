import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import PlayerView from "./VideoPlayerView";

export default {
  title: "Molecules/VideoPlayer/VideoPlayerView",
  component: PlayerView,
  argTypes: {
    onEnd: { action: "onEnd" },
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof PlayerView>;

const Template: ComponentStory<typeof PlayerView> = (args) => {
  const [controls, setControls] = useState(args.controls);
  return (
    <PlayerView
      {...args}
      controls={controls}
      onChange={(data) => setControls((current) => ({ ...current, ...data }))}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  profileId: 1,
  message: {
    created_at: new Date().toLocaleDateString(),
    data: { kind: "message#0.0.1", url: "dQw4w9WgXcQ" },
    id: 1,
    profile_id: 1,
    room_id: 1,
  },
  controls: {
    id: 1,
    muted: false,
    pause: false,
    room_id: 1,
    speaker_id: 1,
    volume: 10,
  },
};

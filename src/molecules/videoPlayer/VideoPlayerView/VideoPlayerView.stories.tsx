import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import {
  defaultControls,
  defaultMessage,
} from "../../../services/utils/defaults";
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
  message: defaultMessage,
  controls: defaultControls,
};

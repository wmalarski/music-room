import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultControls } from "../../../services/utils/defaults";
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
  controls: defaultControls,
  onChange: () => null,
  profileId: 1,
};

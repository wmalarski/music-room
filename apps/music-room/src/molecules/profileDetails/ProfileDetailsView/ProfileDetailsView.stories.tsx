import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultProfile } from "../../../services/utils/defaults";
import PlayerControlsView from "./ProfileDetailsView";

export default {
  title: "Molecules/ProfileDetails/PlayerControlsView",
  component: PlayerControlsView,
} as ComponentMeta<typeof PlayerControlsView>;

const Template: ComponentStory<typeof PlayerControlsView> = (args) => (
  <PlayerControlsView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  profile: defaultProfile,
};

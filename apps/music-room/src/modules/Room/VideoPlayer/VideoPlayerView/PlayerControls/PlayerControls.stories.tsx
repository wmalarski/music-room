import { defaultControls } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlayerControls } from './PlayerControls';

export default {
  title: 'Room/PlayerControls',
  component: PlayerControls,
} as ComponentMeta<typeof PlayerControls>;

const Template: ComponentStory<typeof PlayerControls> = (args) => {
  return <PlayerControls {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  controls: defaultControls,
  onAssignClick: () => null,
  onPauseChange: () => null,
  onVolumeChange: () => null,
  onMuteChange: () => null,
};

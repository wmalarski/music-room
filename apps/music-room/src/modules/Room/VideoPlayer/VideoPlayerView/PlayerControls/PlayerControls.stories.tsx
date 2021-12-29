import { defaultControls } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlayerControls } from './PlayerControls';

export default {
  title: 'Chat/PlayerControls',
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

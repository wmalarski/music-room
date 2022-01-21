import { defaultRoom } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InviteAcceptView } from './InviteAcceptView';

export default {
  title: 'Invite/InviteAcceptView',
  component: InviteAcceptView,
  argTypes: { onAcceptClick: { type: 'function' } },
} as ComponentMeta<typeof InviteAcceptView>;

const Template: ComponentStory<typeof InviteAcceptView> = (args) => (
  <InviteAcceptView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  room: defaultRoom,
  isLoading: false,
  onAcceptClick: () => null,
};

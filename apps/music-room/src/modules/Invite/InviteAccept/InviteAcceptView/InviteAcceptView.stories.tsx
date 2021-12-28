import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultRoom } from '../../../../services/utils/defaults';
import { InviteAcceptView } from './InviteAcceptView';

export default {
  title: 'Invite/InviteAcceptView',
  component: InviteAcceptView,
  argTypes: { onAcceptClicked: { type: 'action' } },
} as ComponentMeta<typeof InviteAcceptView>;

const Template: ComponentStory<typeof InviteAcceptView> = (args) => (
  <InviteAcceptView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  room: defaultRoom,
  isLoading: false,
  onAcceptClicked: () => null,
};

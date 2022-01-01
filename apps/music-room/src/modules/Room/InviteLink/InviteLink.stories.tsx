import { defaultRoom, RoomContextProvider } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InviteLink } from './InviteLink';

export default {
  title: 'Room/InviteLink',
  component: InviteLink,
} as ComponentMeta<typeof InviteLink>;

const Template: ComponentStory<typeof InviteLink> = () => (
  <RoomContextProvider room={defaultRoom}>
    <InviteLink />
  </RoomContextProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  link: 'linkToSomewhere',
};

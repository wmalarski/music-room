import { defaultMember } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomsList } from './RoomsList';

export default {
  title: 'Home/RoomsList',
  component: RoomsList,
} as ComponentMeta<typeof RoomsList>;

const Template: ComponentStory<typeof RoomsList> = (args) => (
  <RoomsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  members: [
    {
      ...defaultMember,
      id: 1,
      profile_name: 'First',
      room_slug: 'first',
    },
    {
      ...defaultMember,
      id: 2,
      profile_name: 'Second',
      room_slug: 'second',
    },
  ],
};

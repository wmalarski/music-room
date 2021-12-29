import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultMember } from '../../../../services/utils/defaults';
import { RoomUsersList } from './RoomUsersList';

export default {
  title: 'Settings/RoomUsersList',
  component: RoomUsersList,
} as ComponentMeta<typeof RoomUsersList>;

const Template: ComponentStory<typeof RoomUsersList> = (args) => (
  <RoomUsersList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  members: [
    {
      ...defaultMember,
      profile_name: 'First',
      room_slug: 'first',
      room_name: 'RoomName1',
    },
    {
      ...defaultMember,
      profile_name: 'Second',
      room_slug: 'second',
      room_name: 'RoomName2',
    },
  ],
  onLoadMore: () => null,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

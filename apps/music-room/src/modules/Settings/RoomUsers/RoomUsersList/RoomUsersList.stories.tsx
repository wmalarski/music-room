import { defaultMember } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomUsersList } from './RoomUsersList';

export default {
  title: 'Settings/RoomUsersList',
  component: RoomUsersList,
} as ComponentMeta<typeof RoomUsersList>;

const Template: ComponentStory<typeof RoomUsersList> = (args) => {
  return <RoomUsersList {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  data: {
    count: 2,
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
  },
  onOffsetChange: () => null,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

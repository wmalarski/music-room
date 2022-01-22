import { defaultMember } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomUsersListItem } from './RoomUsersListItem';

export default {
  title: 'Settings/RoomUsersListItem',
  component: RoomUsersListItem,
} as ComponentMeta<typeof RoomUsersListItem>;

const Template: ComponentStory<typeof RoomUsersListItem> = (args) => {
  return <RoomUsersListItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  member: defaultMember,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

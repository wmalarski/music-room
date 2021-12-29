import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultMember } from '../../../../../services/utils/defaults';
import { RoomUsersListItem } from './RoomUsersListItem';

export default {
  title: 'Settings/RoomUsersListItem',
  component: RoomUsersListItem,
} as ComponentMeta<typeof RoomUsersListItem>;

const Template: ComponentStory<typeof RoomUsersListItem> = (args) => (
  <RoomUsersListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  member: defaultMember,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

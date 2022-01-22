import { defaultMember } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomsListItem } from './RoomsListItem';

export default {
  title: 'Home/RoomsListItem',
  component: RoomsListItem,
} as ComponentMeta<typeof RoomsListItem>;

const Template: ComponentStory<typeof RoomsListItem> = (args) => {
  return <RoomsListItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  member: defaultMember,
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultMember } from '../../services/utils/defaults';
import { Room } from './Room';

export default {
  title: 'Room/Room',
  component: Room,
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = (args) => <Room {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  member: defaultMember,
};

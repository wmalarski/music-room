import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Room } from './Room';

export default {
  title: 'Room/Room',
  component: Room,
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = () => (
  <TestWrapper>
    <Room />
  </TestWrapper>
);

export const Playground = Template.bind({});

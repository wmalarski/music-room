import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomHeader } from './RoomHeader';

export default {
  title: 'Headers/RoomHeader',
  component: RoomHeader,
} as ComponentMeta<typeof RoomHeader>;

const Template: ComponentStory<typeof RoomHeader> = () => (
  <TestWrapper>
    <RoomHeader />
  </TestWrapper>
);

export const Playground = Template.bind({});

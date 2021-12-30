import { defaultRoom, RoomContextProvider } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomNavigation } from './RoomNavigation';

export default {
  title: 'Headers/RoomNavigation',
  component: RoomNavigation,
} as ComponentMeta<typeof RoomNavigation>;

const Template: ComponentStory<typeof RoomNavigation> = (args) => (
  <RoomContextProvider room={defaultRoom}>
    <RoomNavigation {...args} />
  </RoomContextProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  slug: 'abc',
};

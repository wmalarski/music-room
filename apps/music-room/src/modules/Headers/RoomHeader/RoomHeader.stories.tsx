import { defaultRoom, RoomContextProvider } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RoomHeader } from './RoomHeader';

export default {
  title: 'Headers/RoomHeader',
  component: RoomHeader,
} as ComponentMeta<typeof RoomHeader>;

const Template: ComponentStory<typeof RoomHeader> = () => (
  <RoomContextProvider room={defaultRoom}>
    <QueryClientProvider client={new QueryClient()}>
      <RoomHeader />
    </QueryClientProvider>
  </RoomContextProvider>
);

export const Playground = Template.bind({});

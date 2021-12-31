import {
  defaultMember,
  defaultRole,
  defaultRoom,
  RoleContextProvider,
  RoomContextProvider,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Room } from './Room';

export default {
  title: 'Room/Room',
  component: Room,
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = (args) => (
  <RoomContextProvider room={defaultRoom}>
    <RoleContextProvider role={defaultRole}>
      <QueryClientProvider client={new QueryClient()}>
        <Room {...args} />
      </QueryClientProvider>
    </RoleContextProvider>
  </RoomContextProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  member: defaultMember,
};

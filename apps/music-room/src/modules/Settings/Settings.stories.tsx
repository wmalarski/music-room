import {
  defaultRole,
  defaultRoom,
  RoleContextProvider,
  RoomContextProvider,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Settings } from './Settings';

export default {
  title: 'Settings/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = () => (
  <RoomContextProvider room={defaultRoom}>
    <RoleContextProvider role={defaultRole}>
      <QueryClientProvider client={new QueryClient()}>
        <Settings />
      </QueryClientProvider>
    </RoleContextProvider>
  </RoomContextProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  appTitle: 'Title',
  center: 'center',
  header: 'header',
};

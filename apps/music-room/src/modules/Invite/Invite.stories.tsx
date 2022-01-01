import {
  defaultProfile,
  defaultRoom,
  defaultUser,
  UserContext,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Invite } from './Invite';

export default {
  title: 'Invite/Invite',
  component: Invite,
} as ComponentMeta<typeof Invite>;

const Template: ComponentStory<typeof Invite> = () => (
  <UserContext.Provider value={defaultUser}>
    <QueryClientProvider client={new QueryClient()}>
      <Invite />
    </QueryClientProvider>
  </UserContext.Provider>
);

export const Playground = Template.bind({});
Playground.args = {
  room: defaultRoom,
  user: defaultUser,
  profile: defaultProfile,
};

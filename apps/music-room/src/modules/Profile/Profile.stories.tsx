import {
  defaultProfile,
  ProfileContextProvider,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Profile } from './Profile';

export default {
  title: 'Profile/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <ProfileContextProvider profile={defaultProfile}>
    <QueryClientProvider client={new QueryClient()}>
      <Profile {...args} />
    </QueryClientProvider>
  </ProfileContextProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  center: 'center',
  header: 'header',
};

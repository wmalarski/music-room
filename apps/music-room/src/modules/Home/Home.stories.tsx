import { defaultUser, UserContext } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <UserContext.Provider value={defaultUser}>
    <QueryClientProvider client={new QueryClient()}>
      <Home {...args} />
    </QueryClientProvider>
  </UserContext.Provider>
);

export const Playground = Template.bind({});
Playground.args = {
  user: defaultUser,
};

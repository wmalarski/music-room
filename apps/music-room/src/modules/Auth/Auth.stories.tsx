import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Auth } from './Auth';

export default {
  title: 'Auth/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<never> = () => (
  <QueryClientProvider client={new QueryClient()}>
    <Auth />
  </QueryClientProvider>
);

export const Playground = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProfileHeader } from './ProfileHeader';

export default {
  title: 'Headers/ProfileHeader',
  component: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = () => (
  <QueryClientProvider client={new QueryClient()}>
    <ProfileHeader />
  </QueryClientProvider>
);

export const Primary = Template.bind({});
Primary.args = {};

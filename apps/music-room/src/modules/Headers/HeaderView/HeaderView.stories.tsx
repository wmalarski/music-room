import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HeaderView } from './HeaderView';

export default {
  title: 'Headers/HeaderView',
  component: HeaderView,
} as ComponentMeta<typeof HeaderView>;

const Template: ComponentStory<typeof HeaderView> = (args) => (
  <QueryClientProvider client={new QueryClient()}>
    <HeaderView {...args} />
  </QueryClientProvider>
);

export const Playground = Template.bind({});
Playground.args = {
  right: <span>Right</span>,
};

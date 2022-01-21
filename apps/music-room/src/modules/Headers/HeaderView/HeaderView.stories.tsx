import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderView } from './HeaderView';

export default {
  title: 'Headers/HeaderView',
  component: HeaderView,
} as ComponentMeta<typeof HeaderView>;

const Template: ComponentStory<typeof HeaderView> = (args) => (
  <TestWrapper>
    <HeaderView {...args} />
  </TestWrapper>
);

export const Playground = Template.bind({});
Playground.args = {
  right: <span>Right</span>,
};

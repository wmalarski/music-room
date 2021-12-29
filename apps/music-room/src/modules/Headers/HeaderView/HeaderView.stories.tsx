import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderView } from './HeaderView';

export default {
  title: 'Headers/HeaderView',
  component: HeaderView,
} as ComponentMeta<typeof HeaderView>;

const Template: ComponentStory<typeof HeaderView> = (args) => (
  <HeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  right: <p>Right</p>,
};

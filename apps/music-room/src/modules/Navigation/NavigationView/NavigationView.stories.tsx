import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationView } from './NavigationView';

export default {
  title: 'Navigation/NavigationView',
  component: NavigationView,
} as ComponentMeta<typeof NavigationView>;

const Template: ComponentStory<typeof NavigationView> = (args) => (
  <NavigationView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  right: <p>Right</p>,
};

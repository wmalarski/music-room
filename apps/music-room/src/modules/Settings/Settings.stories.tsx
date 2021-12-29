import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Settings } from './Settings';

export default {
  title: 'Settings/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (args) => (
  <Settings {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  appTitle: 'Title',
  center: 'center',
  header: 'header',
};

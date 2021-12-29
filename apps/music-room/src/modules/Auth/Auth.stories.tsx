import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Auth } from './Auth';

export default {
  title: 'Auth/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<never> = () => <Auth />;

export const Playground = Template.bind({});

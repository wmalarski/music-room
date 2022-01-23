import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignOutView } from './SignOutView';

export default {
  title: 'Headers/SignOutView',
  component: SignOutView,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof SignOutView>;

const Template: ComponentStory<typeof SignOutView> = (args) => {
  return <SignOutView {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  onSignOutClick: () => null,
};

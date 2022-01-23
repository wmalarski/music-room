import { defaultUser } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpView from './SignUpView';

export default {
  title: 'Auth/SignUpView',
  component: SignUpView,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof SignUpView>;

const Template: ComponentStory<typeof SignUpView> = (args) => {
  return <SignUpView {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  user: defaultUser,
};

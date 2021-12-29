import { defaultUser } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignInView } from './SignInView';

export default {
  title: 'Auth/SignInView',
  component: SignInView,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof SignInView>;

const Template: ComponentStory<typeof SignInView> = (args) => (
  <SignInView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  user: defaultUser,
};

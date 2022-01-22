import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'Profile/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => {
  return (
    <TestWrapper>
      <Profile />
    </TestWrapper>
  );
};

export const Playground = Template.bind({});

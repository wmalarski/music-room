import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileHeader } from './ProfileHeader';

export default {
  title: 'Headers/ProfileHeader',
  component: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = () => (
  <TestWrapper>
    <ProfileHeader />
  </TestWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};

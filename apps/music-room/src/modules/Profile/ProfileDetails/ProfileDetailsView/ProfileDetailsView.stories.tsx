import { defaultProfile } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileDetailsView } from './ProfileDetailsView';

export default {
  title: 'Profile/ProfileDetailsView',
  component: ProfileDetailsView,
} as ComponentMeta<typeof ProfileDetailsView>;

const Template: ComponentStory<typeof ProfileDetailsView> = (args) => (
  <ProfileDetailsView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  profile: defaultProfile,
};

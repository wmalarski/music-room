import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileNavigationView } from './ProfileNavigationView';

export default {
  title: 'ProfileNavigation/ProfileNavigationView',
  component: ProfileNavigationView,
} as ComponentMeta<typeof ProfileNavigationView>;

const Template: ComponentStory<typeof ProfileNavigationView> = () => (
  <ProfileNavigationView />
);

export const Primary = Template.bind({});
Primary.args = {};

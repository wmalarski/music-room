import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileNavigation } from './ProfileNavigation';

export default {
  title: 'Headers/ProfileNavigation',
  component: ProfileNavigation,
} as ComponentMeta<typeof ProfileNavigation>;

const Template: ComponentStory<typeof ProfileNavigation> = () => (
  <ProfileNavigation />
);

export const Primary = Template.bind({});
Primary.args = {};

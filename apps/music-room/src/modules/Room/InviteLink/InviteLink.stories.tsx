import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InviteLink } from './InviteLink';

export default {
  title: 'Chat/InviteLink',
  component: InviteLink,
} as ComponentMeta<typeof InviteLink>;

const Template: ComponentStory<typeof InviteLink> = (args) => (
  <InviteLink {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  link: 'linkToSomewhere',
};

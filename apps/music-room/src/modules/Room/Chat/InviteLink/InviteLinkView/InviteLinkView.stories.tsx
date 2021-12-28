import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InviteLinkView } from './InviteLinkView';

export default {
  title: 'Chat/InviteLinkView',
  component: InviteLinkView,
} as ComponentMeta<typeof InviteLinkView>;

const Template: ComponentStory<typeof InviteLinkView> = (args) => (
  <InviteLinkView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  link: 'linkToSomewhere',
};

import { defaultAction, defaultMessage } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactionsView } from './ReactionsView';

export default {
  title: 'Room/ReactionsView',
  component: ReactionsView,
} as ComponentMeta<typeof ReactionsView>;

const Template: ComponentStory<typeof ReactionsView> = (args) => (
  <ReactionsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  action: defaultAction,
  message: defaultMessage,
  onChange: () => null,
};

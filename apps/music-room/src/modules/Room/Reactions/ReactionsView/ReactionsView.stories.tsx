import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  defaultAction,
  defaultMessage,
} from '../../../../services/utils/defaults';
import { ReactionsView } from './ReactionsView';

export default {
  title: 'Chat/ReactionsView',
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

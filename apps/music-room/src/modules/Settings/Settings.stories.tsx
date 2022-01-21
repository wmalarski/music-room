import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Settings } from './Settings';

export default {
  title: 'Settings/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = () => (
  <TestWrapper>
    <Settings />
  </TestWrapper>
);

export const Playground = Template.bind({});

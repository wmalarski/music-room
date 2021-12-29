import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Option } from './Option';

export default {
  title: 'Atoms/Option',
  component: Option,
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello',
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Option } from '../Option/Option';
import { Select } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('mod');
  return (
    <Select
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      css={{}}
    >
      <Option value="mod">modRole</Option>
      <Option value="user">userRole</Option>
      <Option value="guest">guestRole</Option>
    </Select>
  );
};

export const Primary = Template.bind({});

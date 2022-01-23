import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledLink } from './Link';

export default {
  title: 'atoms/Link',
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = (args) => {
  return <StyledLink {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  href: '/',
};

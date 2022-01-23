import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { handlers } from '../../tests/handlers';
import { scenarios } from '../../tests/scenarios';
import { Auth } from './Auth';

export default {
  title: 'Auth/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<never> = () => {
  return (
    <TestWrapper>
      <p>{`Email:${scenarios?.noRoomsUser.user.email}`}</p>
      <Auth />
    </TestWrapper>
  );
};

export const Playground = Template.bind({});
Playground.parameters = { msw: { handlers } };

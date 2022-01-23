import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { profilesHandlers } from '../../tests/handlers/profile';
import { convert } from '../../tests/models';
import { scenarios } from '../../tests/scenarios';
import { Invite } from './Invite';

export default {
  title: 'Invite/Invite',
  component: Invite,
} as ComponentMeta<typeof Invite>;

const InviteStory = () => {
  return (
    <TestWrapper>
      <Invite />
    </TestWrapper>
  );
};

const Template: ComponentStory<typeof InviteStory> = InviteStory;

export const Playground = Template.bind({});
Playground.parameters = {
  msw: {
    handlers: [...profilesHandlers],
  },
};
Playground.args = {
  wrapperProps: {
    user: convert.toUser(scenarios?.noRoomsUser.user),
  },
};

import { TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { handlers } from '../../tests/handlers';
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
Playground.parameters = { msw: { handlers } };
Playground.args = {
  wrapperProps: {
    user: convert.toUser(scenarios?.noRoomsUser.user),
  },
};

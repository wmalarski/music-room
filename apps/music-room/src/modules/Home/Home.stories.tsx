import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { membersHandlers } from '../../tests/handlers/members';
import { profilesHandlers } from '../../tests/handlers/profile';
import { convert } from '../../tests/models';
import { scenarios } from '../../tests/scenarios';
import { Home } from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const HomeStory = ({ wrapperProps }: PropsWithTestWrapper) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Home />
    </TestWrapper>
  );
};

const Template: ComponentStory<typeof HomeStory> = HomeStory;

const parameters = {
  msw: {
    handlers: [...membersHandlers, ...profilesHandlers],
  },
};

export const NoRooms = Template.bind({});
NoRooms.parameters = parameters;
NoRooms.args = {
  wrapperProps: {
    user: convert.toUser(scenarios?.noRoomsUser.user),
  },
};

export const ManyRooms = Template.bind({});
ManyRooms.parameters = parameters;
ManyRooms.args = {
  wrapperProps: {
    user: convert.toUser(scenarios?.manyRoomsUser.user),
  },
};

export const FewRooms = Template.bind({});
FewRooms.parameters = parameters;
FewRooms.args = {
  wrapperProps: {
    user: convert.toUser(scenarios?.fewRoomsUser.user),
  },
};

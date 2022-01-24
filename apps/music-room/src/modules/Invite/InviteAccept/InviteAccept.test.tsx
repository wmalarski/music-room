import {
  defaultProfile,
  PropsWithTestWrapper,
  TestWrapper,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { createMockProfile } from '../../../tests/creators/profile';
import { createMockUser } from '../../../tests/creators/user';
import { convert } from '../../../tests/models';
import { roomWithMessagesScenario } from '../../../tests/scenarios';
import { InviteAccept } from './InviteAccept';

type Props = ComponentProps<typeof InviteAccept>;

const View: Props['View'] = ({ onAcceptClick: onAcceptClicked }) => {
  return (
    <>
      <button onClick={onAcceptClicked}>Click</button>
    </>
  );
};

const defaultProps: Props = {
  View,
  profile: defaultProfile,
};

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <InviteAccept {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<InviteAccept />', () => {
  it('should render and raise error', async () => {
    expect.hasAssertions();

    const { room, profile } = roomWithMessagesScenario(3);

    renderComponent({
      profile: convert.toProfile(profile),
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    userEvent.click(await screen.findByText('Click'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/${room.slug}`);
  });

  it('should render and allow invite', async () => {
    expect.hasAssertions();

    const user = createMockUser();
    const profile = createMockProfile({ user });
    const { room } = roomWithMessagesScenario(3);

    renderComponent({
      profile: convert.toProfile(profile),
      wrapperProps: {
        user: convert.toUser(user),
        room: convert.toRoom(room),
      },
    });

    userEvent.click(await screen.findByText('Click'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(2));

    expect(push).toHaveBeenCalledTimes(2);
    expect(push).toHaveBeenLastCalledWith(`/room/${room.slug}`);
  });
});

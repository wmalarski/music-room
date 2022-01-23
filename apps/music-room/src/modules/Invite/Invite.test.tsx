import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { convert } from '../../tests/models';
import { roomWithMessagesScenario } from '../../tests/scenarios';
import { Invite } from './Invite';

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <Invite />
    </TestWrapper>
  );
};

describe('<Invite />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const { user, room, profile } = roomWithMessagesScenario(3);

    renderComponent({
      wrapperProps: {
        user: convert.toUser(user),
        room: convert.toRoom(room),
      },
    });

    await waitFor(async () => {
      expect(
        screen.getByText(`inviteHello ${profile.name}`)
      ).toBeInTheDocument();
    });

    expect(screen.getByText(`inviteHello ${profile.name}`)).toBeInTheDocument();
  });
});

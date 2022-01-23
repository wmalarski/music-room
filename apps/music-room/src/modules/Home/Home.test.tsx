import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { convert } from '../../tests/models';
import { userWithRoomsScenario } from '../../tests/scenarios';
import { Home } from './Home';

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <Home />
    </TestWrapper>
  );
};

describe('<Home />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const { author, rooms, user } = userWithRoomsScenario(4);
    const firstRoomName = rooms[0].name;

    renderComponent({
      wrapperProps: {
        profile: convert.toProfile(author),
        user: convert.toUser(user),
      },
    });

    await waitFor(async () => {
      expect((await screen.findAllByRole('link'))[0]).toBeInTheDocument();
    });

    expect((await screen.findAllByRole('link'))[0]).toBeInTheDocument();
  });
});

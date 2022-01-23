import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { convert } from '../../tests/models';
import { roomWithMessagesScenario } from '../../tests/scenarios';
import { Room } from './Room';

function renderComponent({ wrapperProps }: PropsWithTestWrapper = {}) {
  return render(
    <TestWrapper {...wrapperProps}>
      <Room />
    </TestWrapper>
  );
}

describe('<Room />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const { room, role } = roomWithMessagesScenario(20);

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
        role: convert.toRole(role),
      },
    });

    expect(true).toBeTruthy();
  });
});

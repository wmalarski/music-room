import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { convert } from '../../../tests/models';
import { roomWithMessagesScenario } from '../../../tests/scenarios';
import { ChatRoom } from './ChatRoom';

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <ChatRoom />
    </TestWrapper>
  );
};

describe('<ChatRoom />', () => {
  it('should render list', async () => {
    expect.hasAssertions();

    const { role, messages } = roomWithMessagesScenario(100);
    const firstMessage = messages.at(0)?.data.url ?? 'empty';

    renderComponent({
      wrapperProps: {
        role: convert.toRole(role),
      },
    });

    await waitFor(async () => {
      expect((await screen.findAllByText(firstMessage)).length).toBeGreaterThan(
        0
      );
    });

    expect((await screen.findAllByText(firstMessage)).length).toBeGreaterThan(
      0
    );
  });

  it('should show new message after input', async () => {
    expect.hasAssertions();

    const { role, messages } = roomWithMessagesScenario(1);
    const firstMessage = messages.at(0)?.data.url ?? 'empty';

    renderComponent({
      wrapperProps: {
        role: convert.toRole(role),
      },
    });

    await waitFor(async () => {
      expect(await screen.findByText(firstMessage)).toBeInTheDocument();
    });

    userEvent.type(await screen.findByRole('textbox'), 'test123');
    userEvent.click(await screen.findByRole('button'));

    await waitFor(async () => {
      expect(await screen.findByText('test123')).toBeInTheDocument();
    });
    expect(await screen.findByText('test123')).toBeInTheDocument();
  });
});

import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { roomWithMessagesScenario } from '../../../tests/scenarios';
import { Reactions } from './Reactions';

type Props = ComponentProps<typeof Reactions>;

const View: Props['View'] = ({ action, message, onChange }) => {
  return (
    <>
      <p>{action ? 'action' : 'emptyAction'}</p>
      <p>{message ? 'message' : 'emptyMessage'}</p>
      <button
        onClick={() => {
          onChange({
            likeAt: action?.like_at ? null : new Date().toISOString(),
            dislikeAt: null,
          });
        }}
      >
        Like
      </button>
    </>
  );
};

const defaultProps: Props = { View };

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <Reactions {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<Reactions />', () => {
  it('should have no action', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText('emptyAction')).toBeInTheDocument();
    expect(await screen.findByText('emptyMessage')).toBeInTheDocument();
  });

  it('should have action after Like', async () => {
    expect.hasAssertions();

    const { role } = roomWithMessagesScenario(5);

    renderComponent({
      wrapperProps: {
        role: convert.toRole(role),
      },
    });

    await waitFor(async () => {
      expect(await screen.findByText('message')).toBeInTheDocument();
    });

    userEvent.click(await screen.findByText('Like'));

    await waitFor(async () => {
      expect(await screen.findByText('action')).toBeInTheDocument();
    });
  });
});

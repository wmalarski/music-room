import {
  mockActionsStorage,
  mockMessagesStorage,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Reactions } from './Reactions';

type Props = ComponentProps<typeof Reactions>;

const View: Props['View'] = ({ action, message, onChange }) => (
  <>
    <p>{action ? 'action' : 'emptyAction'}</p>
    <p>{message ? 'message' : 'emptyMessage'}</p>
    <button
      onClick={() =>
        onChange({
          likeAt: action?.like_at ? null : new Date().toISOString(),
          dislikeAt: null,
        })
      }
    >
      Like
    </button>
  </>
);

const defaultProps: Props = { View };

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <Reactions {...defaultProps} {...props} />
    </QueryClientProvider>
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

    mockMessagesStorage.set([
      {
        created_at: new Date().toISOString(),
        data: { kind: 'message#0.0.1', url: '' },
        id: 1,
        profile_id: 1,
        room_id: 1,
      },
    ]);

    renderComponent();

    await waitFor(async () =>
      expect(await screen.findByText('message')).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText('Like'));

    await waitFor(async () =>
      expect(await screen.findByText('action')).toBeInTheDocument()
    );

    expect(mockActionsStorage.get()[0]).toBeDefined();
  });
});

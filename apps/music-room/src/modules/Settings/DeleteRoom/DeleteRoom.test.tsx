import {
  defaultMember,
  defaultProfile,
  mockMembersStorage,
  mockProfilesStorage,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DeleteRoom } from './DeleteRoom';

type Props = ComponentProps<typeof DeleteRoom>;

const View: Props['View'] = ({ onClicked }) => (
  <button onClick={() => onClicked()}>Delete</button>
);

const renderComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <DeleteRoom {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<DeleteRoom />', () => {
  it('should delete room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    userEvent.click(await screen.findByText('Delete'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/`);
  });
});

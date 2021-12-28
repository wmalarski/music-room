import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockMembersStorage } from '../../../services/data/members/membersHandlers';
import { mockProfilesStorage } from '../../../services/data/profiles/profileHandlers';
import {
  defaultMember,
  defaultProfile,
  defaultUser,
} from '../../../services/utils/defaults';
import { CreateRoom } from './CreateRoom';

type Props = ComponentProps<typeof CreateRoom>;

const View: Props['View'] = ({ profile, onSubmit }) => (
  <button onClick={() => onSubmit({ name: 'RoomName', slug: 'RoomName' })}>
    {profile ? 'Add' : ''}
  </button>
);

const defaultProps: Props = {
  View,
  user: defaultUser,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <CreateRoom {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<CreateRoom />', () => {
  it('should add room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    await waitFor(async () =>
      expect(screen.getByText('Add')).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText('Add'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/RoomName`);
  });
});

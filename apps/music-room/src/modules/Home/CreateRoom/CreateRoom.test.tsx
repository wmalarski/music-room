import {
  defaultMember,
  defaultProfile,
  TestWrapper,
} from '@music-room/data-access';
import {
  mockMembersStorage,
  mockProfilesStorage,
} from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { CreateRoom } from './CreateRoom';

type Props = ComponentProps<typeof CreateRoom>;

const View: Props['View'] = ({ profile, onSubmit }) => (
  <button onClick={() => onSubmit({ name: 'RoomName', slug: 'RoomName' })}>
    {profile ? 'Add' : ''}
  </button>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <CreateRoom {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<CreateRoom />', () => {
  it('should add room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    await waitFor(async () => {
      expect(screen.getByText('Add')).toBeInTheDocument();
    });

    userEvent.click(await screen.findByText('Add'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/RoomName`);
  });
});

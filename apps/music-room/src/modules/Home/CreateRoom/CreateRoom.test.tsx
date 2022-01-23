import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { userWithRoomsScenario } from '../../../tests/scenarios';
import { CreateRoom } from './CreateRoom';

type Props = ComponentProps<typeof CreateRoom>;

const View: Props['View'] = ({ profile, onSubmit }) => {
  return (
    <button onClick={() => onSubmit({ name: 'RoomName', slug: 'RoomName' })}>
      {profile ? 'Add' : ''}
    </button>
  );
};

const defaultProps: Props = {
  View,
};

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <CreateRoom {...defaultProps} {...props} />
    </TestWrapper>
  );
};

jest.setTimeout(10000);

describe('<CreateRoom />', () => {
  it('should add room', async () => {
    expect.hasAssertions();

    const { user } = userWithRoomsScenario(0);

    renderComponent({
      wrapperProps: {
        user: convert.toUser(user),
      },
    });

    await waitFor(
      async () => {
        expect(screen.getByText('Add')).toBeInTheDocument();
      },
      {
        timeout: 10000,
      }
    );

    userEvent.click(await screen.findByText('Add'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/RoomName`);
  });
});

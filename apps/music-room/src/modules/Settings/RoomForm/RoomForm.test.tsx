import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { userWithRoomsScenario } from '../../../tests/scenarios';
import { RoomForm } from './RoomForm';

type Props = ComponentProps<typeof RoomForm>;

const View: Props['View'] = ({ roomName, onSubmit }) => {
  return (
    <>
      <button onClick={() => onSubmit({ name: 'RoomName' })}>Change</button>
      <p>{roomName}</p>
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
      <RoomForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomForm />', () => {
  it('should add room', async () => {
    expect.hasAssertions();

    const { author, roles, rooms, user } = userWithRoomsScenario(1);

    renderComponent({
      wrapperProps: {
        profile: convert.toProfile(author),
        role: convert.toRole(roles[0]),
        room: convert.toRoom(rooms[0]),
        user: convert.toUser(user),
      },
    });

    userEvent.click(await screen.findByText('Change'));

    await waitFor(async () => {
      expect(await screen.findByText('RoomName')).toBeInTheDocument();
    });

    expect(await screen.findByText('RoomName')).toBeInTheDocument();
  });
});

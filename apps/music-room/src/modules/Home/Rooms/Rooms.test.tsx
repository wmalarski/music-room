import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { userWithRoomsScenario } from '../../../tests/scenarios';
import { Rooms } from './Rooms';

type Props = ComponentProps<typeof Rooms>;

const View: Props['View'] = ({ data, limit, offset, onOffsetChange }) => {
  return (
    <>
      {data?.members?.map((member) => (
        <p key={member.id}>{member.room_name}</p>
      ))}
      <p>{!data && 'Empty'}</p>
      <button
        onClick={() => {
          onOffsetChange(offset + limit);
        }}
      >
        Move
      </button>
    </>
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
      <Rooms {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<Rooms />', () => {
  it('should have no rooms', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText('Empty')).toBeInTheDocument();
  });

  it('should show rooms', async () => {
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
      expect(screen.getByText(firstRoomName)).toBeInTheDocument();
    });

    expect(screen.queryByText('Empty')).toBeNull();
  });

  it('should different rooms after offset change', async () => {
    expect.hasAssertions();

    const { author, rooms, user } = userWithRoomsScenario(60);
    const lastRoomName = rooms[59].name;

    renderComponent({
      wrapperProps: {
        profile: convert.toProfile(author),
        user: convert.toUser(user),
      },
    });

    userEvent.click(await screen.findByText('Move'));

    await waitFor(async () => {
      expect(screen.getByText(lastRoomName)).toBeInTheDocument();
    });

    expect(screen.queryByText('Empty')).toBeNull();
  });
});

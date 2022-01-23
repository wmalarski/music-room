import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { userWithRoomsScenario } from '../../../tests/scenarios';
import { Rooms } from './Rooms';

type Props = ComponentProps<typeof Rooms>;

const View: Props['View'] = ({ data }) => {
  return (
    <>
      {data?.members?.map((member) => (
        <p key={member.id}>{member.room_name}</p>
      ))}
      <p>{!data && 'Empty'}</p>
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
});

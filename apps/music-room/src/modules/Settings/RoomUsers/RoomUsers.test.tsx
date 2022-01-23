import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { convert } from '../../../tests/models';
import { roomWithUsersScenario } from '../../../tests/scenarios';
import { RoomUsers } from './RoomUsers';

type Props = ComponentProps<typeof RoomUsers>;

const View: Props['View'] = ({
  data,
  onOffsetChange,
  onRoleChange,
  onRemoveClick,
}) => {
  return (
    <>
      {data?.members?.map((member) => (
        <div key={member.id}>
          <p>{member.profile_name}</p>
          <p>{`${member.profile_name} ${member.role}`}</p>
          <button
            onClick={() => onRoleChange(member, 'mod')}
          >{`Change ${member.profile_name}`}</button>
          <button
            onClick={() => onRemoveClick(member)}
          >{`Remove ${member.profile_name}`}</button>
        </div>
      ))}
      <button onClick={() => onOffsetChange(1)}>Load More</button>
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
      <RoomUsers {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomUsers />', () => {
  it('should render member', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(5);

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByText(profiles[0].name)).toBeInTheDocument();
  });

  it('should remove role from room', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(5);
    const name = profiles[0].name;

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByText(name)).toBeInTheDocument();

    userEvent.click(await screen.findByText(`Remove ${name}`));

    await waitFor(async () => {
      expect(screen.queryByText(name)).toBeNull();
    });

    expect(screen.queryByText(name)).toBeNull();
  });

  it('should update role', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(5);
    const name = profiles[0].name;

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByText(`${name} user`)).toBeInTheDocument();

    userEvent.click(await screen.findByText(`Change ${name}`));

    await waitFor(async () => {
      expect(await screen.findByText(`${name} mod`)).toBeInTheDocument();
    });

    expect(await screen.findByText(`${name} mod`)).toBeInTheDocument();
  });
});

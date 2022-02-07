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
  limit,
  offset,
  query,
  onQueryChange,
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
            onClick={() => {
              onRoleChange(member, 'mod');
            }}
          >{`Change ${member.profile_name}`}</button>
          <button
            onClick={() => {
              onRemoveClick(member);
            }}
          >{`Remove ${member.profile_name}`}</button>
        </div>
      ))}
      <input
        value={query}
        placeholder="query"
        onChange={(event) => {
          onQueryChange(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onOffsetChange(offset + limit);
        }}
      >
        Load More
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

  it('should receive debounced query change', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(50);
    const firstName = profiles.at(0)?.name ?? '';
    const lastName = profiles.at(-1)?.name ?? '';

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByText(firstName)).toBeInTheDocument();
    expect(screen.queryByText(lastName)).toBeNull();

    userEvent.type(await screen.findByPlaceholderText('query'), lastName);

    await waitFor(async () => {
      expect(await screen.findByText(lastName)).toBeInTheDocument();
    });

    expect(await screen.findByText(lastName)).toBeInTheDocument();
  });

  it('should fetch correct data after offset change', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(50);
    const lastName = profiles.at(-1)?.name ?? '';

    renderComponent({
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(screen.queryByText(lastName)).toBeNull();

    userEvent.click(await screen.findByText('Load More'));

    await waitFor(async () => {
      expect(await screen.findByText(lastName)).toBeInTheDocument();
    });

    expect(await screen.findByText(lastName)).toBeInTheDocument();
  });

  it('should render default view', async () => {
    expect.hasAssertions();

    const { room, profiles } = roomWithUsersScenario(4);
    const lastName = profiles.at(-1)?.name ?? '';

    renderComponent({
      View: undefined,
      wrapperProps: {
        room: convert.toRoom(room),
      },
    });

    expect(await screen.findByText('roomUsers')).toBeInTheDocument();
  });
});

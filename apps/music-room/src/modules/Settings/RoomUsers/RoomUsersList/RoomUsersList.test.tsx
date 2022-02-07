import {
  defaultMember,
  PropsWithTestWrapper,
  Role,
  SelectMembersResult,
  TestWrapper,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { RoomUsersList } from './RoomUsersList';

type Props = ComponentProps<typeof RoomUsersList>;

const defaultData: SelectMembersResult = {
  count: 2,
  members: [
    {
      ...defaultMember,
      room_id: 1,
      profile_id: 1,
      profile_name: 'First',
      room_slug: 'first',
      room_name: 'RoomName1',
    },
    {
      ...defaultMember,
      room_id: 2,
      profile_id: 2,
      profile_name: 'Second',
      room_slug: 'second',
      room_name: 'RoomName2',
    },
  ],
};

const defaultOwnerRole: Role = {
  id: 111,
  profile_id: 5,
  role: 'owner',
  room_id: 1,
};

const defaultProps: Props = {
  offset: 0,
  query: '',
  limit: 40,
  data: defaultData,
  onQueryChange: () => null,
  onRemoveClick: () => null,
  onRoleChange: () => null,
  onOffsetChange: () => null,
};

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <RoomUsersList {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomUsersList />', () => {
  it('should render list elements', async () => {
    expect.hasAssertions();

    const firstName = defaultData.members[0].profile_name;

    renderComponent();

    await waitFor(async () => {
      expect(await screen.findByText(firstName)).toBeInTheDocument();
    });

    expect(await screen.findByText(firstName)).toBeInTheDocument();
  });

  it('should receive remove action', async () => {
    expect.hasAssertions();

    const onRemoveClick = jest.fn();

    renderComponent({
      onRemoveClick,
      wrapperProps: {
        role: defaultOwnerRole,
      },
    });

    const removeButtons = await screen.findAllByText('removeFromRoom');

    userEvent.click(removeButtons[1]);

    expect(onRemoveClick).toHaveBeenLastCalledWith(defaultData.members[1]);
  });

  it('should receive remove action', async () => {
    expect.hasAssertions();

    const onRoleChange = jest.fn();

    renderComponent({
      onRoleChange,
      wrapperProps: {
        role: defaultOwnerRole,
      },
    });

    const selects = await screen.findAllByRole('combobox');

    userEvent.selectOptions(selects[1], 'mod');

    expect(onRoleChange).toHaveBeenLastCalledWith(
      defaultData.members[1],
      'mod'
    );
  });
});

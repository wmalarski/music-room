import { defaultMember } from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomUsersList } from './RoomUsersList';

type Props = ComponentProps<typeof RoomUsersList>;

const defaultProps: Props = {
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
  onLoadMore: () => null,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <RoomUsersList {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomUsersList />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
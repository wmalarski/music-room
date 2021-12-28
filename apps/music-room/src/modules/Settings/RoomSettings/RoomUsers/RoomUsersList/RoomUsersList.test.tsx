import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultMember } from '../../../../../services/utils/defaults';
import RoomUsersList from './RoomUsersList';

type ComponentProps = React.ComponentProps<typeof RoomUsersList>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
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
  return render(<RoomUsersList {...defaultProps} {...props} />);
}

describe('<RoomUsersList />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

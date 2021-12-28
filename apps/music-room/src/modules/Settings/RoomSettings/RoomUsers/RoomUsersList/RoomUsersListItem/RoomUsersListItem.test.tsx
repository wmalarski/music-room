import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { defaultMember } from '../../../../../../services/utils/defaults';
import RoomUsersListItem from './RoomUsersListItem';

type ComponentProps = React.ComponentProps<typeof RoomUsersListItem>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    member: defaultMember,
    onRemoveClick: () => null,
    onRoleChange: () => null,
  };
  return render(<RoomUsersListItem {...defaultProps} {...props} />);
}

describe('<RoomUsersListItem />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

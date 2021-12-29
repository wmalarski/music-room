import { defaultMember } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomUsersListItem } from './RoomUsersListItem';

type Props = ComponentProps<typeof RoomUsersListItem>;

const defaultProps: Props = {
  member: defaultMember,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomUsersListItem {...defaultProps} {...props} />);
};

describe('<RoomUsersListItem />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

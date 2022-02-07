import { defaultMember, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomUsersListItem } from './RoomUsersListItem';

type Props = ComponentProps<typeof RoomUsersListItem>;

const defaultProps: Props = {
  member: defaultMember,
  onRemoveClick: () => null,
  onRoleChange: () => null,
};

const defaultAvatar =
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80';

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <RoomUsersListItem {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<RoomUsersListItem />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(defaultMember.profile_name)
    ).toBeInTheDocument();
  });

  it('should render', async () => {
    expect.hasAssertions();

    renderComponent({
      member: {
        ...defaultMember,
        profile_avatar: defaultAvatar,
      },
    });

    expect(
      await screen.findByText(
        defaultMember.profile_name.slice(0, 2).toUpperCase()
      )
    ).toBeInTheDocument();
  });
});

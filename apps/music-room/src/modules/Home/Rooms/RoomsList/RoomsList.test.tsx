import { defaultMember } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomsList } from './RoomsList';

type Props = ComponentProps<typeof RoomsList>;

const defaultProps: Props = {
  onOffsetChange: () => void 0,
  offset: 0,
  limit: 40,
  data: {
    count: 2,
    members: [
      {
        ...defaultMember,
        room_id: 1,
        id: 1,
        profile_id: 1,
        profile_name: 'First',
        room_slug: 'first',
      },
      {
        ...defaultMember,
        room_id: 2,
        id: 2,
        profile_id: 2,
        profile_name: 'Second',
        room_slug: 'second',
      },
    ],
  },
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomsList {...defaultProps} {...props} />);
};

describe('<RoomsList />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

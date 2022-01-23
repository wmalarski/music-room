import { defaultProfile, defaultRoom } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { InviteAcceptView } from './InviteAcceptView';

type Props = ComponentProps<typeof InviteAcceptView>;

const defaultProps: Props = {
  room: defaultRoom,
  isLoading: false,
  onAcceptClick: () => null,
  profile: defaultProfile,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<InviteAcceptView {...defaultProps} {...props} />);
};

describe('<InviteAcceptView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

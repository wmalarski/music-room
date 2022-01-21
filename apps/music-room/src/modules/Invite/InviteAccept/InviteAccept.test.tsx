import {
  defaultMember,
  defaultProfile,
  defaultRoom,
  TestWrapper,
} from '@music-room/data-access';
import { mockMembersStorage } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { InviteAccept } from './InviteAccept';

type Props = ComponentProps<typeof InviteAccept>;

const View: Props['View'] = ({ onAcceptClick: onAcceptClicked }) => (
  <>
    <button onClick={onAcceptClicked}>Click</button>
  </>
);

const defaultProps: Props = {
  View,
  profile: defaultProfile,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <InviteAccept {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<InviteAccept />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/${defaultRoom.slug}`);
  });
});

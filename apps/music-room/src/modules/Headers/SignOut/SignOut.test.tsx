import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { SignOut } from './SignOut';

type Props = ComponentProps<typeof SignOut>;

const View = ({ onSignOutClicked }) => (
  <button onClick={onSignOutClicked}>Click</button>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <SignOut {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<SignOut />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    const { push } = jest.requireMock('next/router').default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith('/');
  });
});

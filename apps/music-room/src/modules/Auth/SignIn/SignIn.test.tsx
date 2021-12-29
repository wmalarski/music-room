import { defaultUser, mockUserStorage } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { TestWrapper } from '../../../tests/TestWrapper';
import { SignIn } from './SignIn';

type Props = ComponentProps<typeof SignIn>;

const defaultUserEmail = defaultUser.email ?? '';

const View: Props['View'] = ({ user, error, onSubmit }) => (
  <>
    <p>{user?.email}</p>
    <p>{error?.message}</p>
    <button
      onClick={() =>
        onSubmit({
          email: defaultUserEmail,
          password: 'Passw0rd',
        })
      }
    >
      Click
    </button>
  </>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <SignIn {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<SignIn />', () => {
  it('should login', async () => {
    expect.hasAssertions();

    mockUserStorage.set([defaultUser]);

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () =>
      expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument()
    );

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
  });

  it('should fail to login', async () => {
    expect.hasAssertions();
    const message = 'Invalid login credentials';

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () =>
      expect(await screen.findByText(message)).toBeInTheDocument()
    );

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});

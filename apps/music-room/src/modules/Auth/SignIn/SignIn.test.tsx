import { defaultUser, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps, useState } from 'react';
import { roomWithMessagesScenario } from '../../../tests/scenarios';
import { SignIn } from './SignIn';

type Props = ComponentProps<typeof SignIn>;

const defaultUserEmail = defaultUser.email ?? '';

const View: Props['View'] = ({ user, error, onSubmit }) => {
  const [email, setEmail] = useState('');
  return (
    <>
      <p>{user?.email}</p>
      <p>{error?.message}</p>
      <input
        value={email}
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit({
            email: email,
            password: 'Passw0rd',
          });
        }}
      >
        Click
      </button>
    </>
  );
};

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

    const { user } = roomWithMessagesScenario(3);

    renderComponent();

    userEvent.type(await screen.findByPlaceholderText('email'), user.email);
    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () => {
      expect(await screen.findByText(user.email)).toBeInTheDocument();
    });

    expect(await screen.findByText(user.email)).toBeInTheDocument();
  });

  it('should fail to login', async () => {
    expect.hasAssertions();
    const message = 'Not found';

    renderComponent();

    userEvent.type(await screen.findByPlaceholderText('email'), 'elo@elo.elo');
    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () => {
      expect(await screen.findByText(message)).toBeInTheDocument();
    });

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});

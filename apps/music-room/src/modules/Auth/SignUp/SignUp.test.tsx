import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockUserStorage } from '../../../services/auth/authHandlers';
import { defaultUser } from '../../../services/utils/defaults';
import { SignUp } from './SignUp';

type Props = ComponentProps<typeof SignUp>;

const defaultUserEmail = defaultUser.email ?? '';

const View: Props['View'] = ({ onSubmit, user, error }) => (
  <>
    <p>{user?.email}</p>
    <p>{error?.message}</p>
    <button
      onClick={() =>
        onSubmit({
          confirmPassword: 'Passw0rd',
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
    <QueryClientProvider client={new QueryClient()}>
      <SignUp {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<SignUp />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () =>
      expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument()
    );

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
    expect(mockUserStorage.get()).toHaveLength(1);
  });
});

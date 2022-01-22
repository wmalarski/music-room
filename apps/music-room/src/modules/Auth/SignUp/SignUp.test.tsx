import { defaultUser, TestWrapper } from '@music-room/data-access';
import { mockUserStorage } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { SignUp } from './SignUp';

type Props = ComponentProps<typeof SignUp>;

const defaultUserEmail = defaultUser.email ?? '';

const View: Props['View'] = ({ onSubmit, user, error }) => {
  return (
    <>
      <p>{user?.email}</p>
      <p>{error?.message}</p>
      <button
        onClick={() => {
          onSubmit({
            confirmPassword: 'Passw0rd',
            email: defaultUserEmail,
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
      <SignUp {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<SignUp />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText('Click'));

    await waitFor(async () => {
      expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
    });

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
    expect(mockUserStorage.get()).toHaveLength(1);
  });
});

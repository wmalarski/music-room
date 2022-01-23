import { defaultUser, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { mockDb } from '../../../tests/models';
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
jest.setTimeout(10000);

describe('<SignUp />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    await act(async () => userEvent.click(await screen.findByText('Click')));

    await waitFor(
      async () => {
        expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
      },
      {
        timeout: 5000,
      }
    );

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
    const user = mockDb.user.findFirst({
      where: { email: { equals: defaultUserEmail } },
    });
    expect(user).toBeDefined();
  });
});

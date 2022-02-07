import {
  defaultPostgrestError,
  defaultUser,
  TestWrapper,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import SignUpView from './SignUpView';
import { SignUpViewData } from './SignUpView.utils';

type Props = ComponentProps<typeof SignUpView>;

const defaultProps: Props = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  user: defaultUser,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <SignUpView {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const submitForm = async ({
  email,
  password,
  confirmPassword,
}: SignUpViewData) => {
  if (email.length > 0) {
    userEvent.type(
      await screen.findByPlaceholderText('emailPlaceholder'),
      email
    );
  }

  if (password.length > 0) {
    userEvent.type(
      await screen.findByPlaceholderText('passwordPlaceholder'),
      password
    );
  }

  if (confirmPassword.length > 0) {
    userEvent.type(
      await screen.findByPlaceholderText('confirmPasswordPlaceholder'),
      confirmPassword
    );
  }

  userEvent.click(await screen.findByText('signUpButton'));
};

describe('<SignUpView />', () => {
  it('should render and submit correct form', async () => {
    expect.hasAssertions();

    const data = {
      email: 'example@example.com',
      password: '12345678.Aa',
      confirmPassword: '12345678.Aa',
    };

    const onSubmit = jest.fn((event) => {
      expect(event.email).toStrictEqual(data.email);
      expect(event.password).toStrictEqual(data.password);
    });

    renderComponent({ onSubmit });

    await submitForm(data);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should render errors after submit incorrect form', async () => {
    expect.hasAssertions();

    const data = {
      email: 'ex',
      password: '',
      confirmPassword: 'password.123',
    };

    renderComponent();

    await submitForm(data);

    expect(await screen.findByText('fieldIsRequired')).toBeInTheDocument();
    expect(await screen.findByText('errorMinLength: 3')).toBeInTheDocument();
    expect(await screen.findByText('fieldIsDifferent')).toBeInTheDocument();
  });

  it('should show loading state and error', async () => {
    expect.hasAssertions();

    renderComponent({
      isLoading: true,
      error: defaultPostgrestError,
    });

    expect(
      await screen.findByText(defaultPostgrestError.message)
    ).toBeInTheDocument();
  });
});

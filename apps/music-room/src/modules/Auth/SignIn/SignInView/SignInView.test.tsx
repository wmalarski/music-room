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
import { SignInView } from './SignInView';
import { SignInViewData } from './SignInView.utils';

type Props = ComponentProps<typeof SignInView>;

const defaultEmail = 'example@example.com';
const defaultPassword = '12345678.Aa';
const defaultProps: Props = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  user: defaultUser,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <SignInView {...defaultProps} {...props} />
    </TestWrapper>
  );
};

const submitForm = async ({ email, password }: SignInViewData) => {
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
  userEvent.click(await screen.findByText('signInButton'));
};

describe('<SignInView />', () => {
  it('should render and submit correct form', async () => {
    expect.hasAssertions();

    const data = {
      email: defaultEmail,
      password: defaultPassword,
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

  it('should show error on submit incorrect form', async () => {
    expect.hasAssertions();

    const data = {
      email: '12',
      password: '',
    };

    renderComponent();

    await submitForm(data);

    expect(await screen.findByText('errorMinLength: 3')).toBeInTheDocument();
    expect(await screen.findByText('fieldIsRequired')).toBeInTheDocument();
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

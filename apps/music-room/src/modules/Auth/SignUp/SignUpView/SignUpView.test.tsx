import { defaultUser, TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import SignUpView from './SignUpView';

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

describe('<SignUpView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

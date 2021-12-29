import { defaultUser } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TestWrapper } from '../../../../tests/TestWrapper';
import { SignInView } from './SignInView';

type Props = ComponentProps<typeof SignInView>;

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

describe('<SignInView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

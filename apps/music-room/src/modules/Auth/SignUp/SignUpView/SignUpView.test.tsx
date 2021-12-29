import { defaultUser } from '@music-room/data-access';
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
  return render(<SignUpView {...defaultProps} {...props} />);
};

describe('<SignUpView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { SignOutView } from './SignOutView';

type Props = ComponentProps<typeof SignOutView>;

const defaultProps: Props = {
  onSignOutClick: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<SignOutView {...defaultProps} {...props} />);
};

describe('<SignOutView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

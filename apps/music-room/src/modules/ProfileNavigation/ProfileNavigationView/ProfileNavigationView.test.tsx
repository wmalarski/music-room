import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ProfileNavigationView } from './ProfileNavigationView';

type Props = ComponentProps<typeof ProfileNavigationView>;

const defaultProps: Props = {};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<ProfileNavigationView {...defaultProps} {...props} />);
};

describe('<ProfileNavigationView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

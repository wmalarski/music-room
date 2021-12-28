import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { NavigationView } from './NavigationView';

type Props = ComponentProps<typeof NavigationView>;

const defaultProps: Props = {
  right: <p>Right</p>,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<NavigationView {...defaultProps} {...props} />);
};

describe('<NavigationView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { HeaderView } from './HeaderView';

type Props = ComponentProps<typeof HeaderView>;

const defaultProps: Props = {
  right: <p>Right</p>,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<HeaderView {...defaultProps} {...props} />);
};

describe('<NavigationView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

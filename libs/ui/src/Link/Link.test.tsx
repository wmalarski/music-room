import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { StyledLink } from './Link';

type Props = ComponentProps<typeof StyledLink>;

const defaultProps: Props = {
  href: '/',
  children: 'Hello',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<StyledLink {...defaultProps} {...props} />);
};

describe('<StyledLink />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

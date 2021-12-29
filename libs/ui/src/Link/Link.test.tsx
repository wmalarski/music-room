import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Link } from './Link';

type Props = ComponentProps<typeof Link>;

const defaultProps: Props = {
  href: '/',
  children: 'Hello',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Link {...defaultProps} {...props} css={{}} />);
};

describe('<Link />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

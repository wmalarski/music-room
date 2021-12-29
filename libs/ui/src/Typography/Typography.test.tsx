import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Typography } from './Typography';

type Props = ComponentProps<typeof Typography>;

const defaultProps: Props = {};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Typography {...defaultProps} {...props} css={{}} />);
};

describe('<Typography />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

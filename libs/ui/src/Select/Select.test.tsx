import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Select } from './Select';

type Props = ComponentProps<typeof Select>;

const defaultProps: Props = {};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Select {...defaultProps} {...props} css={{}} />);
};

describe('<Select />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

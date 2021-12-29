import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Alert } from './Alert';

type Props = ComponentProps<typeof Alert>;

const defaultProps: Props = {
  severity: 'error',
  children: 'AAA',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Alert {...defaultProps} {...props} />);
};

describe('<Alert />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

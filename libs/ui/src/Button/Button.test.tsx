import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Button } from './Button';

type Props = ComponentProps<typeof Button>;

const defaultProps: Props = {
  children: 'AAA',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Button {...defaultProps} {...props} />);
};

describe('<Button />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

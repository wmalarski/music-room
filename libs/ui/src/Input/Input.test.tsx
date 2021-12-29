import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Input } from './Input';

type Props = ComponentProps<typeof Input>;

const defaultProps: Props = {};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Input {...defaultProps} {...props} />);
};

describe('<Input />', () => {
  it('should have textbox role', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByRole('textbox')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Layout } from './Layout';

type Props = ComponentProps<typeof Layout>;

const defaultProps: Props = {};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Layout {...defaultProps} {...props} />);
};

describe('<Layout />', () => {
  it('should have correct children', async () => {
    expect.hasAssertions();

    renderComponent({
      children: 'Hello World',
    });

    expect(await screen.findByText('Hello World')).toBeInTheDocument();
  });
});

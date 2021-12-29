import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Debug } from './Debug';

type Props = ComponentProps<typeof Debug>;

const defaultProps: Props = {
  value: { hello: 'world' },
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<Debug {...defaultProps} {...props} />);
};

describe('<Debug />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

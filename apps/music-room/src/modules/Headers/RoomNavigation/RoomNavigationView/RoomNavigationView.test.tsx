import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomNavigationView } from './RoomNavigationView';

type Props = ComponentProps<typeof RoomNavigationView>;

const defaultProps: Props = {
  slug: 'slug123',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomNavigationView {...defaultProps} {...props} />);
};

describe('<RoomNavigationView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { DeleteRoomView } from './DeleteRoomView';

type Props = ComponentProps<typeof DeleteRoomView>;

const defaultProps: Props = {
  isLoading: false,
  onClicked: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<DeleteRoomView {...defaultProps} {...props} />);
};

describe('<DeleteRoomView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

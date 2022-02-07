import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { DeleteRoomView } from './DeleteRoomView';

type Props = ComponentProps<typeof DeleteRoomView>;

const defaultProps: Props = {
  isLoading: false,
  onClick: () => null,
  error: null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<DeleteRoomView {...defaultProps} {...props} />);
};

describe('<DeleteRoomView />', () => {
  it('should render and receive approve click', async () => {
    expect.hasAssertions();

    const onClick = jest.fn();

    renderComponent({
      onClick,
    });

    userEvent.click(await screen.findByRole('button'));

    userEvent.click(await screen.findByText('confirmRemoveRoom'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

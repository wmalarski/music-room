import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomFormView } from './RoomFormView';

type Props = ComponentProps<typeof RoomFormView>;

const defaultProps: Props = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  roomName: 'roomName',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomFormView {...defaultProps} {...props} />);
};

describe('<RoomFormView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

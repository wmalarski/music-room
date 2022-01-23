import { defaultProfile } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { CreateRoomView } from './CreateRoomView';

type Props = ComponentProps<typeof CreateRoomView>;

const defaultProps: Props = {
  profile: defaultProfile,
  error: null,
  isLoading: false,
  onSubmit: () => null,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<CreateRoomView {...defaultProps} {...props} />);
};

describe('<CreateRoomView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

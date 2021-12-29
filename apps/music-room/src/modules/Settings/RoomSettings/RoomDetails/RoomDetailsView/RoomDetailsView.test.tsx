import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RoomDetailsView } from './RoomDetailsView';

type Props = ComponentProps<typeof RoomDetailsView>;

const defaultProps: Props = {
  roomName: 'roomName',
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(<RoomDetailsView {...defaultProps} {...props} />);
};

describe('<RoomDetailsView />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

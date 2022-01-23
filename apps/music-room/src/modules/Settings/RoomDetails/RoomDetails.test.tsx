import {
  defaultRoom,
  PropsWithTestWrapper,
  TestWrapper,
} from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { RoomDetails } from './RoomDetails';

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <RoomDetails />
    </TestWrapper>
  );
};

describe('<RoomDetails />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    const name = 'RoomName123';

    renderComponent({
      wrapperProps: {
        room: { ...defaultRoom, name },
      },
    });

    expect(await screen.findByText(name)).toBeInTheDocument();
  });
});

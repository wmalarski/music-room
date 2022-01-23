import { TestWrapper } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { RoomHeader } from './RoomHeader';

const renderComponent = () => {
  return render(
    <TestWrapper>
      <RoomHeader />
    </TestWrapper>
  );
};

describe('<RoomHeader />', () => {
  it('should render home button', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText('headerHome')).toBeInTheDocument();
  });
});

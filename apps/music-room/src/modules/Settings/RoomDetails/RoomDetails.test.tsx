import { defaultMember, MemberContextProvider } from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { RoomDetails } from './RoomDetails';

const renderComponent = () => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <TestWrapper>
        <RoomDetails />
      </TestWrapper>
    </MemberContextProvider>
  );
};

describe('<RoomDetails />', () => {
  it('should render', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(defaultMember.room_name)
    ).toBeInTheDocument();
  });
});

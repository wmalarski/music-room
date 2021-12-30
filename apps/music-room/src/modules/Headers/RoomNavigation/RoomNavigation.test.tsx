import { defaultMember, MemberContextProvider } from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { RoomNavigation } from './RoomNavigation';

const renderComponent = () => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <TestWrapper>
        <RoomNavigation />
      </TestWrapper>
    </MemberContextProvider>
  );
};

describe('<RoomNavigation />', () => {
  it('should render slug', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(defaultMember.room_slug)
    ).toBeInTheDocument();
  });
});

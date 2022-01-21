import { defaultMember, MemberContextProvider } from '@music-room/data-access';
import { TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { RoomHeader } from './RoomHeader';

const renderComponent = () => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <TestWrapper>
        <RoomHeader />
      </TestWrapper>
    </MemberContextProvider>
  );
};

describe('<RoomHeader />', () => {
  it('should render slug', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(defaultMember.room_slug)
    ).toBeInTheDocument();
  });
});

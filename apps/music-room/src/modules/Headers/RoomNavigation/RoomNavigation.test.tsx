import { defaultMember } from '@music-room/data-access';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../../tests/TestWrapper';
import { MemberContextProvider } from '../../../utils/contexts/MemberContext';
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

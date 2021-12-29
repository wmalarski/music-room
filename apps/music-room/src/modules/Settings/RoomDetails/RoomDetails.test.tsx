import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultMember } from '../../../services/utils/defaults';
import { MemberContextProvider } from '../../../utils/contexts/MemberContext';
import { RoomDetails } from './RoomDetails';

const renderComponent = () => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomDetails />
      </QueryClientProvider>
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

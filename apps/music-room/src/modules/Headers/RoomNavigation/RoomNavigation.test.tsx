import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultMember } from '../../../services/utils/defaults';
import { MemberContextProvider } from '../../../utils/room/MemberContext';
import { RoomNavigation } from './RoomNavigation';

type Props = ComponentProps<typeof RoomNavigation>;

const View: Props['View'] = ({ slug }) => <p>{slug}</p>;

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomNavigation {...defaultProps} {...props} />
      </QueryClientProvider>
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

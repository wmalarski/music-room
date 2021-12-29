import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultMember } from '../../../../services/utils/defaults';
import { MemberContextProvider } from '../../../../utils/contexts/MemberContext';
import { RoomDetails } from './RoomDetails';

type Props = ComponentProps<typeof RoomDetails>;

const View: Props['View'] = ({ roomName }) => <p>{roomName}</p>;

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomDetails {...defaultProps} {...props} />
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

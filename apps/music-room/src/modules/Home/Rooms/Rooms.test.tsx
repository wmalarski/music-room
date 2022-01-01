import { defaultMember } from '@music-room/data-access';
import { mockMembersStorage, TestWrapper } from '@music-room/util-tests';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Rooms } from './Rooms';

type Props = ComponentProps<typeof Rooms>;

const View: Props['View'] = ({ data }) => (
  <>
    {data?.members?.map((member) => (
      <p key={member.id}>{member.room_name}</p>
    ))}
    <p>{!data && 'Empty'}</p>
  </>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <TestWrapper>
      <Rooms {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe('<Rooms />', () => {
  it('should have no rooms', async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText('Empty')).toBeInTheDocument();
  });

  it('should show rooms', async () => {
    expect.hasAssertions();

    mockMembersStorage.set([defaultMember]);

    renderComponent();

    await waitFor(async () =>
      expect(screen.getByText(defaultMember.room_name)).toBeInTheDocument()
    );

    expect(screen.queryByText('Empty')).toBeNull();
  });
});

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockMembersStorage } from '../../../services/data/members/membersHandlers';
import { defaultMember } from '../../../services/utils/defaults';
import { RoomUsers } from './RoomUsers';

type Props = ComponentProps<typeof RoomUsers>;

const View = ({ members, onLoadMore, onRoleChange, onRemoveClick }) => (
  <>
    {members?.map((member) => (
      <div key={member.id}>
        <p>{member.profile_name}</p>
        <p>{member.role}</p>
        <button
          onClick={() => onRoleChange(member, 'mod')}
        >{`Change ${member.profile_name}`}</button>
        <button
          onClick={() => onRemoveClick(member)}
        >{`Remove ${member.profile_name}`}</button>
      </div>
    ))}
    <button onClick={onLoadMore}>Load More</button>
  </>
);

const defaultProps: Props = {
  View,
};

const renderComponent = (props: Partial<Props> = {}) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <RoomUsers {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe('<RoomUsers />', () => {
  it('should render member', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(
      await screen.findByText(defaultMember.profile_name)
    ).toBeInTheDocument();
  });

  it('should remove role from room', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(
      await screen.findByText(defaultMember.profile_name)
    ).toBeInTheDocument();

    userEvent.click(
      await screen.findByText(`Remove ${defaultMember.profile_name}`)
    );

    await waitFor(async () =>
      expect(screen.queryByText(defaultMember.profile_name)).toBeNull()
    );

    expect(screen.queryByText(defaultMember.profile_name)).toBeNull();
  });

  it('should update role', async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(await screen.findByText('user')).toBeInTheDocument();

    userEvent.click(
      await screen.findByText(`Change ${defaultMember.profile_name}`)
    );

    await waitFor(async () =>
      expect(await screen.findByText('mod')).toBeInTheDocument()
    );

    expect(await screen.findByText('mod')).toBeInTheDocument();
  });
});

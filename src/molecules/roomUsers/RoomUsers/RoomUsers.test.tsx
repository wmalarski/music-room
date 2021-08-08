import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockMembersStorage } from "../../../services/data/members/membersHandlers";
import { defaultMember } from "../../../services/utils/defaults";
import { RoomUsersListProps } from "../RoomUsersList/RoomUsersList";
import RoomUsers from "./RoomUsers";

type ComponentProps = React.ComponentProps<typeof RoomUsers>;

const View = ({
  members,
  onLoadMore,
  onRoleChange,
  onRemoveClick,
}: RoomUsersListProps) => (
  <>
    {members?.map((member) => (
      <div key={member.role_id}>
        <p>{member.name}</p>
        <p>{member.role}</p>
        <button
          onClick={() => onRoleChange(member, "mod")}
        >{`Change ${member.name}`}</button>
        <button
          onClick={() => onRemoveClick(member)}
        >{`Remove ${member.name}`}</button>
      </div>
    ))}
    <button onClick={onLoadMore}>Load More</button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <RoomUsers {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<RoomUsers />", () => {
  it("should render member", async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(await screen.findByText(defaultMember.name)).toBeInTheDocument();
  });

  it("should remove role from room", async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(await screen.findByText(defaultMember.name)).toBeInTheDocument();

    userEvent.click(await screen.findByText(`Remove ${defaultMember.name}`));

    await waitFor(async () =>
      expect(screen.queryByText(defaultMember.name)).toBeNull()
    );

    expect(screen.queryByText(defaultMember.name)).toBeNull();
  });

  it("should update role", async () => {
    expect.hasAssertions();

    mockMembersStorage.setContext(defaultMember);
    mockMembersStorage.set([defaultMember]);

    renderComponent();

    expect(await screen.findByText("user")).toBeInTheDocument();

    userEvent.click(await screen.findByText(`Change ${defaultMember.name}`));

    await waitFor(async () =>
      expect(await screen.findByText("mod")).toBeInTheDocument()
    );

    expect(await screen.findByText("mod")).toBeInTheDocument();
  });
});

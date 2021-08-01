import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockMembersStorage } from "../../../services/data/members/membersHandlers";
import { defaultMember, defaultUser } from "../../../services/utils/defaults";
import { RoomsListProps } from "../RoomsList/RoomsList";
import Rooms from "./Rooms";

type ComponentProps = React.ComponentProps<typeof Rooms>;

const View = ({ onRoomClick, members }: RoomsListProps) => (
  <>
    {members?.map((member) => (
      <button key={member.role_id} onClick={() => onRoomClick(member)}>
        {member.room_name}
      </button>
    ))}
    <p>{!members && "Empty"}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
    user: defaultUser,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <Rooms {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<Rooms />", () => {
  it("should have no rooms", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText("Empty")).toBeInTheDocument();
  });

  it("should show rooms", async () => {
    expect.hasAssertions();

    mockMembersStorage.set([defaultMember]);

    renderComponent();

    await waitFor(async () =>
      expect(screen.getByText(defaultMember.room_name)).toBeInTheDocument()
    );

    expect(screen.queryByText("Empty")).toBeNull();
  });

  it("should navigate to room route", async () => {
    expect.hasAssertions();

    mockMembersStorage.set([defaultMember]);

    renderComponent();

    await waitFor(async () =>
      expect(screen.getByText(defaultMember.room_name)).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText(defaultMember.room_name));

    const { push } = jest.requireMock("next/router").default;
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(`/room/${defaultMember.slug}`);
  });
});

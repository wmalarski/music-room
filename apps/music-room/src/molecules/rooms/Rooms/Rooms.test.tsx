import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockMembersStorage } from "../../../services/data/members/membersHandlers";
import { defaultMember, defaultUser } from "../../../services/utils/defaults";
import { RoomsListProps } from "../RoomsList/RoomsList";
import Rooms from "./Rooms";

type ComponentProps = React.ComponentProps<typeof Rooms>;

const View = ({ members }: RoomsListProps) => (
  <>
    {members?.map((member) => (
      <p key={member.id}>{member.room_name}</p>
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
});

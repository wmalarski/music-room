import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockProfilesStorage } from "../../../services/data/profiles/profileHandlers";
import { defaultProfile, defaultUser } from "../../../services/utils/defaults";
import { CreateRoomViewProps } from "../CreateRoomView/CreateRoomView";
import CreateRoom from "./CreateRoom";

type ComponentProps = Parameters<typeof CreateRoom>[0];

const View = ({ profile, onSubmit }: CreateRoomViewProps) => (
  <button onClick={() => onSubmit({ name: "RoomName", slug: "RoomName" })}>
    {profile ? "Add" : ""}
  </button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
    user: defaultUser,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <CreateRoom {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<CreateRoom />", () => {
  it("should add room", async () => {
    expect.hasAssertions();

    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    await waitFor(async () =>
      expect(screen.getByText("Add")).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText("Add"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/RoomName`);
  });
});

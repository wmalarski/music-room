import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultMember } from "../../../services/utils/defaults";
import { MemberContextProvider } from "../../../utils/room/MemberContext";
import { RoomNavigationViewProps } from "../RoomNavigationView/RoomNavigationView";
import RoomNavigation from "./RoomNavigation";

type ComponentProps = React.ComponentProps<typeof RoomNavigation>;

const View = ({
  onRoomClicked,
  onSettingsClicked,
}: RoomNavigationViewProps) => (
  <>
    <button onClick={onRoomClicked}>Room</button>
    <button onClick={onSettingsClicked}>Settings</button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomNavigation {...defaultProps} {...props} />
      </QueryClientProvider>
    </MemberContextProvider>
  );
};

describe("<RoomNavigation />", () => {
  it("should navigate to room", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Room"));

    const { push } = jest.requireMock("next/router").default;

    expect(push).toHaveBeenCalledWith(`/room/${defaultMember.slug}`);
  });

  it("should navigate to settings", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Settings"));

    const { push } = jest.requireMock("next/router").default;

    expect(push).toHaveBeenCalledWith(`/room/${defaultMember.slug}/settings`);
  });
});

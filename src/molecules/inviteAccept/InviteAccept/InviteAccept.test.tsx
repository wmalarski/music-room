import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultProfile, defaultRoom } from "../../../services/utils/defaults";
import { InviteAcceptViewProps } from "../InviteAcceptView/InviteAcceptView";
import InviteAccept from "./InviteAccept";

type ComponentProps = React.ComponentProps<typeof InviteAccept>;

const View = ({ onAcceptClicked }: InviteAcceptViewProps) => (
  <>
    <button onClick={onAcceptClicked}>Click</button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
    profile: defaultProfile,
    room: defaultRoom,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <InviteAccept {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<InviteAccept />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(`/room/${defaultRoom.slug}`);
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultRoom } from "../../../services/utils/defaults";
import InviteAcceptView from "./InviteAcceptView";

type ComponentProps = React.ComponentProps<typeof InviteAcceptView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    room: defaultRoom,
    onAcceptClicked: () => null,
  };
  return render(<InviteAcceptView {...defaultProps} {...props} />);
}

describe("<InviteAcceptView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

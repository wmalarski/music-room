import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import RoomDetailsView from "./RoomDetailsView";

type ComponentProps = React.ComponentProps<typeof RoomDetailsView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    roomName: "roomName",
  };
  return render(<RoomDetailsView {...defaultProps} {...props} />);
}

describe("<RoomDetailsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

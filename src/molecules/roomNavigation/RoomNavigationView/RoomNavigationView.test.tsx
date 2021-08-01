import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import RoomNavigationView from "./RoomNavigationView";

type ComponentProps = React.ComponentProps<typeof RoomNavigationView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onRoomClicked: () => null,
    onSettingsClicked: () => null,
  };
  return render(<RoomNavigationView {...defaultProps} {...props} />);
}

describe("<RoomNavigationView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

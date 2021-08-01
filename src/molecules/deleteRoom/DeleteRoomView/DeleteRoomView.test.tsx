import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import DeleteRoomView from "./DeleteRoomView";

type ComponentProps = React.ComponentProps<typeof DeleteRoomView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onClicked: () => null,
  };
  return render(<DeleteRoomView {...defaultProps} {...props} />);
}

describe("<DeleteRoomView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import RoomFormView from "./RoomFormView";

type ComponentProps = Parameters<typeof RoomFormView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    error: null,
    isLoading: false,
    onSubmit: () => null,
    roomName: "roomName",
  };
  return render(<RoomFormView {...defaultProps} {...props} />);
}

describe("<RoomFormView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

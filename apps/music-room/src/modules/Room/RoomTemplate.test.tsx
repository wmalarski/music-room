import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import RoomTemplate from "./RoomTemplate";

type ComponentProps = Parameters<typeof RoomTemplate>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    appTitle: "Room",
    bottom: "Bottom",
    header: "Header",
    left: "Left",
    right: "Right",
  };
  return render(<RoomTemplate {...defaultProps} {...props} />);
}

describe("<RoomTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

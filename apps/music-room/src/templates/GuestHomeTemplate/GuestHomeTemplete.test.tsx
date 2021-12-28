import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import GuestHomeTemplate from "./GuestHomeTemplate";

type ComponentProps = Parameters<typeof GuestHomeTemplate>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    left: "AA",
    right: "BB",
  };
  return render(<GuestHomeTemplate {...defaultProps} {...props} />);
}

describe("<GuestHomeTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

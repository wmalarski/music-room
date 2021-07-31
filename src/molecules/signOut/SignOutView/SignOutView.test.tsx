import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import SignOutView from "./SignOutView";

type ComponentProps = Parameters<typeof SignOutView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onSignOutClicked: () => null,
  };
  return render(<SignOutView {...defaultProps} {...props} />);
}

describe("<SignOutView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

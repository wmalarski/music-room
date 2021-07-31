import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ProfileNavigationView from "./ProfileNavigationView";

type ComponentProps = Parameters<typeof ProfileNavigationView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onProfileClicked: () => null,
  };
  return render(<ProfileNavigationView {...defaultProps} {...props} />);
}

describe("<ProfileNavigationView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

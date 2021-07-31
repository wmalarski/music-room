import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import NavigationView from "./NavigationView";

type ComponentProps = Parameters<typeof NavigationView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onHomeClicked: () => null,
    right: <p>Right</p>,
  };
  return render(<NavigationView {...defaultProps} {...props} />);
}

describe("<NavigationView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

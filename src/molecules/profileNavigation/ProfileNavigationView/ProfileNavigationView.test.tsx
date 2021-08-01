import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ProfileNavigationView from "./ProfileNavigationView";

type ComponentProps = React.ComponentProps<typeof ProfileNavigationView>;

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

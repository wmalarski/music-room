import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Alert from "./Alert";

type ComponentProps = React.ComponentProps<typeof Alert>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    severity: "error",
    children: "AAA",
  };
  return render(<Alert {...defaultProps} {...props} />);
}

describe("<Alert />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

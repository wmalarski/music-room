import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Link from "./Link";

type ComponentProps = Parameters<typeof Link>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    href: "/",
    children: "Hello",
  };
  return render(<Link {...defaultProps} {...props} />);
}

describe("<Link />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

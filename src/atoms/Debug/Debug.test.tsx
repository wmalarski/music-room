import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Debug from "./Debug";

type ComponentProps = Parameters<typeof Debug>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    value: { hello: "world" },
  };
  return render(<Debug {...defaultProps} {...props} />);
}

describe("<Debug />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

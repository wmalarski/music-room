import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Select from "./Select";

type ComponentProps = Parameters<typeof Select>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {};
  return render(<Select {...defaultProps} {...props} />);
}

describe("<Select />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

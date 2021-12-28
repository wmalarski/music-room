import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Input from "./Input";

type ComponentProps = React.ComponentProps<typeof Input>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {};
  return render(<Input {...defaultProps} {...props} />);
}

describe("<Input />", () => {
  it("should have textbox role", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByRole("textbox")).toBeInTheDocument();
  });
});

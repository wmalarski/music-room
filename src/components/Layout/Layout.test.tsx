import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

type ComponentProps = Parameters<typeof Layout>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {};
  return render(<Layout {...defaultProps} {...props} />);
}

describe("<Layout />", () => {
  it("should have correct children", async () => {
    expect.hasAssertions();

    renderComponent({
      children: "Hello World",
    });

    expect(await screen.findByText("Hello World")).toBeInTheDocument();
  });
});

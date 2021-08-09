import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ProfileTemplate from "./ProfileTemplate";

type ComponentProps = Parameters<typeof ProfileTemplate>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    center: "Center",
    header: "Header",
  };
  return render(<ProfileTemplate {...defaultProps} {...props} />);
}

describe("<ProfileTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

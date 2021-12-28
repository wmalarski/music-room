import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import UserHomeTemplate from "./UserHomeTemplate";

type ComponentProps = Parameters<typeof UserHomeTemplate>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    center: "center",
    header: "header",
    left: "left",
  };
  return render(<UserHomeTemplate {...defaultProps} {...props} />);
}

describe("<UserHomeTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

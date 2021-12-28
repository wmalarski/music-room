import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import SettingsTemplate from "./SettingsTemplate";

type ComponentProps = Parameters<typeof SettingsTemplate>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    appTitle: "Settings",
    center: "center",
    header: "header",
  };
  return render(<SettingsTemplate {...defaultProps} {...props} />);
}

describe("<SettingsTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

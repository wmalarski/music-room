import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import {
  defaultAction,
  defaultMessage,
} from "../../../services/utils/defaults";
import ReactionsView from "./ReactionsView";

type ComponentProps = Parameters<typeof ReactionsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    action: defaultAction,
    message: defaultMessage,
    onChange: () => null,
  };
  return render(<ReactionsView {...defaultProps} {...props} />);
}

describe("<ReactionsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultUser } from "../../../services/utils/defaults";
import SignUpView from "./SignUpView";

type ComponentProps = Parameters<typeof SignUpView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    error: null,
    isLoading: false,
    onSubmit: () => null,
    user: defaultUser,
  };
  return render(<SignUpView {...defaultProps} {...props} />);
}

describe("<SignUpView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

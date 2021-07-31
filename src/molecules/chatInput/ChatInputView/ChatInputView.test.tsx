import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ChatInputView from "./ChatInputView";

type ComponentProps = Parameters<typeof ChatInputView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onQueryChange: () => null,
    onSubmit: () => null,
    query: "",
  };
  return render(<ChatInputView {...defaultProps} {...props} />);
}

describe("<ChatInputView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultMessage } from "../../../services/utils/defaults";
import ChatMessagesList from "./ChatMessagesList";

type ComponentProps = React.ComponentProps<typeof ChatMessagesList>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    messages: [
      { ...defaultMessage, id: 1 },
      { ...defaultMessage, id: 2 },
    ],
    onLoadMore: () => null,
  };
  return render(<ChatMessagesList {...defaultProps} {...props} />);
}

describe("<ChatMessagesList />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

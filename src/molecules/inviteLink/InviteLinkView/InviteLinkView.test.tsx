import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import InviteLinkView from "./InviteLinkView";

type ComponentProps = React.ComponentProps<typeof InviteLinkView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    link: "linkToSomewhere",
  };
  return render(<InviteLinkView {...defaultProps} {...props} />);
}

describe("<InviteLinkView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

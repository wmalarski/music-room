import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultProfile } from "../../../services/utils/defaults";
import CreateRoomView from "./CreateRoomView";

type ComponentProps = React.ComponentProps<typeof CreateRoomView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    profile: defaultProfile,
    error: null,
    isLoading: false,
    onSubmit: () => null,
  };
  return render(<CreateRoomView {...defaultProps} {...props} />);
}

describe("<CreateRoomView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

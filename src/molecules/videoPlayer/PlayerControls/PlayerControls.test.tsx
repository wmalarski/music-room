import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultControls } from "../../../services/utils/defaults";
import PlayerControls from "./PlayerControls";

type ComponentProps = React.ComponentProps<typeof PlayerControls>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    controls: defaultControls,
    onChange: () => null,
    profileId: 1,
  };
  return render(<PlayerControls {...defaultProps} {...props} />);
}

describe("<PlayerControls />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

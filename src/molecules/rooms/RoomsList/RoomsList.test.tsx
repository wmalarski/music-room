import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultMember } from "../../../services/utils/defaults";
import RoomsList from "./RoomsList";

type ComponentProps = React.ComponentProps<typeof RoomsList>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    members: [
      {
        ...defaultMember,
        room_id: 1,
        role_id: 1,
        profile_id: 1,
        name: "First",
        slug: "first",
      },
      {
        ...defaultMember,
        room_id: 2,
        role_id: 2,
        profile_id: 2,
        name: "Second",
        slug: "second",
      },
    ],
    onRoomClick: () => null,
  };
  return render(<RoomsList {...defaultProps} {...props} />);
}

describe("<RoomsList />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RoomUsersListProps } from "../RoomUsersList/RoomUsersList";
import RoomUsers from "./RoomUsers";

type ComponentProps = React.ComponentProps<typeof RoomUsers>;

const View = ({
  onLoadMore,
  members,
  onRoleChange,
  onRemoveClick,
}: RoomUsersListProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <RoomUsers {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<RoomUsers />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});

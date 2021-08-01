import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultMember } from "../../../services/utils/defaults";
import { MemberContextProvider } from "../../../utils/room/MemberContext";
import { RoomDetailsViewProps } from "../RoomDetailsView/RoomDetailsView";
import RoomDetails from "./RoomDetails";

type ComponentProps = React.ComponentProps<typeof RoomDetails>;

const View = ({ roomName }: RoomDetailsViewProps) => <p>{roomName}</p>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomDetails {...defaultProps} {...props} />
      </QueryClientProvider>
    </MemberContextProvider>
  );
};

describe("<RoomDetails />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(defaultMember.room_name)
    ).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultMember } from "../../../services/utils/defaults";
import { MemberContextProvider } from "../../../utils/room/MemberContext";
import { RoomNavigationViewProps } from "../RoomNavigationView/RoomNavigationView";
import RoomNavigation from "./RoomNavigation";

type ComponentProps = React.ComponentProps<typeof RoomNavigation>;

const View = ({ slug }: RoomNavigationViewProps) => <p>{slug}</p>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <RoomNavigation {...defaultProps} {...props} />
      </QueryClientProvider>
    </MemberContextProvider>
  );
};

describe("<RoomNavigation />", () => {
  it("should render slug", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText(defaultMember.slug)).toBeInTheDocument();
  });
});

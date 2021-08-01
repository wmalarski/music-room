import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultMember } from "../../../services/utils/defaults";
import { MemberContextProvider } from "../../../utils/room/MemberContext";
import { InviteLinkViewProps } from "../InviteLinkView/InviteLinkView";
import InviteLink from "./InviteLink";

type ComponentProps = React.ComponentProps<typeof InviteLink>;

const View = ({ link }: InviteLinkViewProps) => <p>{link}</p>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <MemberContextProvider member={defaultMember}>
      <QueryClientProvider client={new QueryClient()}>
        <InviteLink {...defaultProps} {...props} />
      </QueryClientProvider>
    </MemberContextProvider>
  );
};

describe("<InviteLink />", () => {
  it("should render link", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText(/.*qwertyuiop/)).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProfileNavigationViewProps } from "../ProfileNavigationView/ProfileNavigationView";
import ProfileNavigation from "./ProfileNavigation";

type ComponentProps = React.ComponentProps<typeof ProfileNavigation>;

const View = ({ onProfileClicked }: ProfileNavigationViewProps) => (
  <button onClick={onProfileClicked}>Click</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <ProfileNavigation {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<ProfileNavigation />", () => {
  it("should navigate to profile", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    expect(push).toHaveBeenCalledWith("/profile");
  });
});

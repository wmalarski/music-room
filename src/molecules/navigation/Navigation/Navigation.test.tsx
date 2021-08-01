import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationViewProps } from "../NavigationView/NavigationView";
import Navigation from "./Navigation";

type ComponentProps = React.ComponentProps<typeof Navigation>;

const View = ({ right, onHomeClicked }: NavigationViewProps) => (
  <>
    <button onClick={onHomeClicked}>Click</button>
    <div>{right}</div>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <Navigation {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<Navigation />", () => {
  it("should render right", async () => {
    expect.hasAssertions();

    renderComponent({ right: "Hello world" });

    expect(await screen.findByText("Hello world")).toBeInTheDocument();
  });

  it("should navigate to home", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    expect(push).toHaveBeenCalledWith("/");
  });
});

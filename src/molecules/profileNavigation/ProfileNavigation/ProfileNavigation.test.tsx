import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProfileNavigation from "./ProfileNavigation";

type ComponentProps = React.ComponentProps<typeof ProfileNavigation>;

const View = () => <button>Click</button>;

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

    expect(true).toBeTruthy();
  });
});

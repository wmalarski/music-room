import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockProfilesStorage } from "../../../services/data/profiles/profileHandlers";
import { defaultProfile } from "../../../services/utils/defaults";
import { ProfileDetailsViewProps } from "../ProfileDetailsView/ProfileDetailsView";
import ProfileDetails from "./ProfileDetails";

type ComponentProps = Parameters<typeof ProfileDetails>[0];

const View = ({ profile, onSubmit }: ProfileDetailsViewProps) => (
  <>
    <button onClick={() => onSubmit({ name: "Username" })}>
      {profile ? "Update" : ""}
    </button>
    <p>{profile.name}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
    profile: defaultProfile,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <ProfileDetails {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<ProfileDetails />", () => {
  it("should update profile", async () => {
    expect.hasAssertions();

    mockProfilesStorage.set([defaultProfile]);

    renderComponent();

    userEvent.click(await screen.findByText("Update"));

    await waitFor(async () =>
      expect(await screen.findByText("Username")).toBeInTheDocument()
    );

    expect(await screen.findByText("Username")).toBeInTheDocument();
  });
});

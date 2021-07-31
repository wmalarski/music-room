import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockRoomsStorage } from "../../../services/data/rooms/roomsHandlers";
import { defaultRoom } from "../../../services/utils/defaults";
import { RoomFormViewProps } from "../RoomFormView/RoomFormView";
import RoomForm from "./RoomForm";

type ComponentProps = Parameters<typeof RoomForm>[0];

const View = ({ roomName, onSubmit }: RoomFormViewProps) => (
  <>
    <button onClick={() => onSubmit({ name: "RoomName" })}>Change</button>
    <p>{roomName}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = { View };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <RoomForm {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<RoomForm />", () => {
  it("should add room", async () => {
    expect.hasAssertions();

    mockRoomsStorage.set([defaultRoom]);

    renderComponent();

    userEvent.click(await screen.findByText("Change"));

    await waitFor(async () =>
      expect(await screen.findByText("RoomName")).toBeInTheDocument()
    );

    expect(await screen.findByText("RoomName")).toBeInTheDocument();
  });
});
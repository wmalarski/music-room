import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChatInputViewProps } from "../ChatInputView/ChatInputView";
import ChatInput from "./ChatInput";

type ComponentProps = React.ComponentProps<typeof ChatInput>;

const View = ({
  query,
  message,
  onQueryChange,
  onSubmit,
}: ChatInputViewProps) => (
  <>
    <button onClick={() => onSubmit({ url: "URL" })}>Submit</button>
    <p>{query}</p>
    <p>{message?.data.url}</p>
    <input
      placeholder="Query"
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
    />
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <ChatInput {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<ChatInput />", () => {
  it("should change query", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.type(await screen.findByPlaceholderText("Query"), "query");

    expect(await screen.findByText("query")).toBeInTheDocument();
  });

  it("should add message", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Submit"));

    await waitFor(async () =>
      expect(await screen.findByText("URL")).toBeInTheDocument()
    );

    expect(await screen.findByText("URL")).toBeInTheDocument();
  });
});

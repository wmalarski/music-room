import React from "react";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type ChatInputViewData = {
  url: string;
};

export type ChatInputViewProps = {
  query: string;
  onSubmit: (data: ChatInputViewData) => void;
  onQueryChange: (query: string) => void;
};

const ChatInputView = ({
  query,
  onSubmit,
  onQueryChange,
}: ChatInputViewProps): JSX.Element => {
  const text = useText();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ url: query });
      }}
    >
      <Input
        placeholder={text("addUrlPlaceholder")}
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <Button type="submit">{text("addMessage")}</Button>
    </form>
  );
};

export default ChatInputView;

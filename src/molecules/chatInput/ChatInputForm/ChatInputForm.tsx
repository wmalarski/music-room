import React from "react";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type ChatInputFormData = {
  url: string;
};

export type ChatInputFormProps = {
  query: string;
  onSubmit: (data: ChatInputFormData) => void;
  onQueryChange: (query: string) => void;
};

const ChatInputForm = ({
  query,
  onSubmit,
  onQueryChange,
}: ChatInputFormProps): JSX.Element => {
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

export default ChatInputForm;

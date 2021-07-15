import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
import useText from "../../../utils/translations/useText";

export type ChatInputFormData = {
  url: string;
};

export type ChatInputFormProps = {
  onSubmit: (data: ChatInputFormData) => void;
};

const ChatInputForm = ({ onSubmit }: ChatInputFormProps): JSX.Element => {
  const text = useText();
  const { register, handleSubmit } = useForm<ChatInputFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("addUrlPlaceholder")} {...register("url")} />
      <button type="submit">{text("addMessage")}</button>
    </form>
  );
};

export default ChatInputForm;

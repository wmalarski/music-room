import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";

export type ChatInputFormData = {
  url: string;
};

export type ChatInputFormProps = {
  onSubmit: (data: ChatInputFormData) => void;
};

const ChatInputForm = ({ onSubmit }: ChatInputFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<ChatInputFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Url" {...register("url")} />
      <button type="submit">Add message</button>
    </form>
  );
};

export default ChatInputForm;

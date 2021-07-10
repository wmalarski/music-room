import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";

export type ChatInputData = {
  url: string;
};

export type ChatInputProps = {
  onSubmit: (data: ChatInputData) => void;
};

const ChatInput = ({ onSubmit }: ChatInputProps): JSX.Element => {
  const { register, handleSubmit } = useForm<ChatInputData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Url" {...register("url")} />
      <button type="submit">Add message</button>
    </form>
  );
};

export default ChatInput;

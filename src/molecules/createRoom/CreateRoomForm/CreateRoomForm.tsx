import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type CreateRoomFormData = {
  name: string;
};

export type CreateRoomFormProps = {
  onSubmit: (data: CreateRoomFormData) => void;
};

const CreateRoomForm = ({ onSubmit }: CreateRoomFormProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<CreateRoomFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("roomNamePlaceholder")} {...register("name")} />
      <Button type="submit">{text("addRoom")}</Button>
    </form>
  );
};

export default CreateRoomForm;

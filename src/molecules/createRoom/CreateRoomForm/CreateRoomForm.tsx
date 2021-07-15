import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
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
      <button type="submit">{text("addRoom")}</button>
    </form>
  );
};

export default CreateRoomForm;

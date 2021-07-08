import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";

export type CreateRoomFormData = {
  name: string;
};

export type CreateRoomFormProps = {
  onSubmit: (data: CreateRoomFormData) => void;
};

const CreateRoomForm = ({ onSubmit }: CreateRoomFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<CreateRoomFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" {...register("name")} />
      <button type="submit">Add room</button>
    </form>
  );
};

export default CreateRoomForm;

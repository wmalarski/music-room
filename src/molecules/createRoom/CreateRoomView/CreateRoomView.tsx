import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type CreateRoomViewData = {
  name: string;
};

export type CreateRoomViewProps = {
  onSubmit: (data: CreateRoomViewData) => void;
};

const CreateRoomView = ({ onSubmit }: CreateRoomViewProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<CreateRoomViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("roomNamePlaceholder")} {...register("name")} />
      <Button type="submit">{text("addRoom")}</Button>
    </form>
  );
};

export default CreateRoomView;

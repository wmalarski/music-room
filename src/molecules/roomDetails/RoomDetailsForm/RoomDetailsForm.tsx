import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type RoomDetailsFormData = {
  name: string;
};

export type RoomDetailsFormProps = {
  roomName: string;
  onSubmit: (data: RoomDetailsFormData) => void;
};

const RoomDetailsForm = ({
  roomName,
  onSubmit,
}: RoomDetailsFormProps): JSX.Element | null => {
  const text = useText();

  const { register, handleSubmit } = useForm<RoomDetailsFormData>({
    defaultValues: { name: roomName },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("roomNamePlaceholder")} {...register("name")} />
      <Button type="submit">{text("updateRoom")}</Button>
    </form>
  );
};

export default RoomDetailsForm;

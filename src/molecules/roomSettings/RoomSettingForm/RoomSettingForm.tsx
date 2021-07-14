import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";

export type RoomSettingsFormData = {
  name: string;
};

export type RoomSettingsFormProps = {
  roomName: string;
  onSubmit: (data: RoomSettingsFormData) => void;
};

const RoomSettingsForm = ({
  roomName,
  onSubmit,
}: RoomSettingsFormProps): JSX.Element | null => {
  const { register, handleSubmit } = useForm<RoomSettingsFormData>({
    defaultValues: { name: roomName },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" {...register("name")} />
      <button type="submit">Update room</button>
    </form>
  );
};

export default RoomSettingsForm;

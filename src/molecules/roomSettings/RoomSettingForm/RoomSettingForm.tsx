import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
import useText from "../../../utils/translations/useText";

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
  const text = useText();

  const { register, handleSubmit } = useForm<RoomSettingsFormData>({
    defaultValues: { name: roomName },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("roomNamePlaceholder")} {...register("name")} />
      <button type="submit">{text("updateRoom")}</button>
    </form>
  );
};

export default RoomSettingsForm;

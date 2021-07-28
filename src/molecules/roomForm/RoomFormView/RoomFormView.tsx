import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../atoms";
import useText from "../../../utils/translations/useText";
import { RoomFormViewData } from "./RoomFormView.utils";

export type RoomFormViewProps = {
  roomName: string;
  onSubmit: (data: RoomFormViewData) => void;
};

const RoomFormView = ({
  roomName,
  onSubmit,
}: RoomFormViewProps): JSX.Element | null => {
  const text = useText();

  const { register, handleSubmit } = useForm<RoomFormViewData>({
    defaultValues: { name: roomName },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={text("roomNamePlaceholder")} {...register("name")} />
      <Button type="submit">{text("updateRoom")}</Button>
    </form>
  );
};

export default RoomFormView;

import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../atoms";
import Alert from "../../../atoms/Alert/Alert";
import { Profile } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";
import {
  CreateRoomViewData,
  useCreateRoomViewOptions,
} from "./CreateRoomView.utils";

export type CreateRoomViewProps = {
  isLoading: boolean;
  profile: Profile | null;
  error: PostgrestError | null;
  onSubmit: (data: CreateRoomViewData) => void;
};

const CreateRoomView = ({
  error,
  isLoading,
  onSubmit,
}: CreateRoomViewProps): JSX.Element => {
  const text = useText();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateRoomViewData>();

  const options = useCreateRoomViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={text("roomNamePlaceholder")}
        {...register("name", options.name)}
      />
      {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
      <Input
        placeholder={text("roomSlugPlaceholder")}
        {...register("slug", options.slug)}
      />
      {errors.slug && <Alert severity="error">{errors.slug.message}</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} type="submit">
        {text("addRoom")}
      </Button>
    </form>
  );
};

export default CreateRoomView;

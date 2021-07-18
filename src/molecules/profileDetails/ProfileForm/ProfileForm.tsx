import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "../../../atoms";
import { Profile } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type ProfileFormData = {
  name: string;
};

export type ProfileFormProps = {
  profile: Profile;
  onSubmit: (data: ProfileFormData) => void;
};

const ProfileForm = ({ profile, onSubmit }: ProfileFormProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<ProfileFormData>({
    defaultValues: { name: profile.name },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text("profileHeader")}</Typography>
      <Input
        placeholder={text("profileNamePlaceholder")}
        {...register("name")}
      />
      <Button type="submit">{text("profileSaveButton")}</Button>
    </form>
  );
};

export default ProfileForm;

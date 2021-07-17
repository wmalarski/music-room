import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
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
      <p>{text("profileHeader")}</p>
      <Input
        placeholder={text("profileNamePlaceholder")}
        {...register("name")}
      />
      <button type="submit">{text("profileSaveButton")}</button>
    </form>
  );
};

export default ProfileForm;

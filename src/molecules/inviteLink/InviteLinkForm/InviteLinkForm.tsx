import { Input } from "../../../atoms";

export type InviteLinkFormProps = {
  link: string;
};

const InviteLinkForm = ({ link }: InviteLinkFormProps): JSX.Element => (
  <Input readOnly value={link} />
);

export default InviteLinkForm;

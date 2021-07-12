export type InviteLinkFormProps = {
  link: string;
};

const InviteLinkForm = ({ link }: InviteLinkFormProps): JSX.Element => (
  <input readOnly value={link} />
);

export default InviteLinkForm;

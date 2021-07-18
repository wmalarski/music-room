import { Input } from "../../../atoms";

export type InviteLinkViewProps = {
  link: string;
};

const InviteLinkView = ({ link }: InviteLinkViewProps): JSX.Element => (
  <Input readOnly value={link} />
);

export default InviteLinkView;

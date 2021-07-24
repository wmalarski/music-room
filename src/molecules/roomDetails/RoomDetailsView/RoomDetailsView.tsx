import React from "react";
import useRoleGuard from "../../../utils/room/useRoleGuard";
import RoomDetailsCard from "../RoomDetailsCard/RoomDetailsCard";
import RoomDetailsForm, {
  RoomDetailsFormData,
} from "../RoomDetailsForm/RoomDetailsForm";

export type RoomDetailsViewProps = {
  roomName: string;
  onSubmit: (data: RoomDetailsFormData) => void;
};

const RoomDetailsView = ({
  roomName,
  onSubmit,
}: RoomDetailsViewProps): JSX.Element | null =>
  useRoleGuard({
    owner: <RoomDetailsForm roomName={roomName} onSubmit={onSubmit} />,
    mod: <RoomDetailsForm roomName={roomName} onSubmit={onSubmit} />,
    default: <RoomDetailsCard roomName={roomName} />,
  }) ?? null;

export default RoomDetailsView;

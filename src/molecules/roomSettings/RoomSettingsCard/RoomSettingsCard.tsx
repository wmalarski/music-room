import React from "react";
import { Typography } from "../../../atoms";

export type RoomSettingsCardProps = {
  roomName: string;
};

const RoomSettingsCard = ({
  roomName,
}: RoomSettingsCardProps): JSX.Element | null => {
  return <Typography>{roomName}</Typography>;
};

export default RoomSettingsCard;

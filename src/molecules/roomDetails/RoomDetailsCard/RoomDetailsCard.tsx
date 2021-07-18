import React from "react";
import { Typography } from "../../../atoms";

export type RoomDetailsCardProps = {
  roomName: string;
};

const RoomDetailsCard = ({
  roomName,
}: RoomDetailsCardProps): JSX.Element | null => {
  return <Typography>{roomName}</Typography>;
};

export default RoomDetailsCard;

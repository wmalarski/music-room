import React from "react";
import { Typography } from "../../../atoms";

export type RoomDetailsViewProps = {
  roomName: string;
};

const RoomDetailsView = ({
  roomName,
}: RoomDetailsViewProps): JSX.Element | null => {
  return <Typography>{roomName}</Typography>;
};

export default RoomDetailsView;

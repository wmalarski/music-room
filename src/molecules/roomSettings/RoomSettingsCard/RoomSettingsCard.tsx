import React from "react";

export type RoomSettingsCardProps = {
  roomName: string;
};

const RoomSettingsCard = ({
  roomName,
}: RoomSettingsCardProps): JSX.Element | null => {
  return <p>{roomName}</p>;
};

export default RoomSettingsCard;

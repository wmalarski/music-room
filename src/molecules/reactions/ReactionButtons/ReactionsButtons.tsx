import React from "react";
import { Button, Debug } from "../../../atoms";
import { Action } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type ReactionsButtonsData = {
  likeAt: string | null;
  dislikeAt: string | null;
};

export type ReactionsButtonsProps = {
  action: Action | null;
  onChange: (data: ReactionsButtonsData) => void;
};

const ReactionsButtons = ({
  action,
  onChange,
}: ReactionsButtonsProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Debug value={action} />
      <Button
        onClick={() =>
          onChange({
            likeAt: action?.like_at ? null : new Date().toISOString(),
            dislikeAt: null,
          })
        }
      >
        {action?.like_at ? text("removeLikeMessage") : text("likeMessage")}
      </Button>
      <Button
        onClick={() =>
          onChange({
            likeAt: null,
            dislikeAt: action?.dislike_at ? null : new Date().toISOString(),
          })
        }
      >
        {action?.dislike_at
          ? text("removeDislikeMessage")
          : text("dislikeMessage")}
      </Button>
    </>
  );
};

export default ReactionsButtons;

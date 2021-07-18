import React from "react";
import { Button, Debug } from "../../../atoms";
import { Action } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type ReactionsViewData = {
  likeAt: string | null;
  dislikeAt: string | null;
};

export type ReactionsViewProps = {
  action: Action | null;
  onChange: (data: ReactionsViewData) => void;
};

const ReactionsView = ({
  action,
  onChange,
}: ReactionsViewProps): JSX.Element => {
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

export default ReactionsView;

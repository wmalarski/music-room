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
      <pre>{JSON.stringify(action, null, 2)}</pre>
      <button
        onClick={() =>
          onChange({
            likeAt: action?.like_at ? null : new Date().toISOString(),
            dislikeAt: null,
          })
        }
      >
        {action?.like_at ? text("removeLikeMessage") : text("likeMessage")}
      </button>
      <button
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
      </button>
    </>
  );
};

export default ReactionsButtons;

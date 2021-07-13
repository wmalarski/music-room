import { Action } from "../../../services/data/types";

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
}: ReactionsButtonsProps): JSX.Element => (
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
      {action?.like_at ? "Remove like" : "Like"}
    </button>
    <button
      onClick={() =>
        onChange({
          likeAt: null,
          dislikeAt: action?.dislike_at ? null : new Date().toISOString(),
        })
      }
    >
      {action?.dislike_at ? "Remove Dislike" : "Dislike"}
    </button>
  </>
);

export default ReactionsButtons;

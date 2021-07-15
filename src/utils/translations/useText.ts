import { useCallback } from "react";
import translations, { Translation } from "./translations";

const useText = (): (<TKey extends keyof Translation>(
  key: TKey
) => Translation[TKey]) => {
  const current = translations.default;
  return useCallback(
    <TKey extends keyof Translation>(key: TKey) => current[key],
    [current]
  );
};

export default useText;

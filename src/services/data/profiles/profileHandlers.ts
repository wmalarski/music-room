import { DefaultRequestBody, rest } from "msw";
import { SUPABASE_ENDPOINT } from "../../supabase";
import { Profile } from "../types";

export const mockProfilesStorage = {
  get: (): Profile[] => JSON.parse(sessionStorage.getItem("profiles") ?? "[]"),
  set: (profiles: Profile[]): void =>
    sessionStorage.setItem("profiles", JSON.stringify(profiles)),
};

export const profilesHandlers = [
  rest.get<DefaultRequestBody, Profile>(
    `${SUPABASE_ENDPOINT}/profiles`,
    (req, res, ctx) => res(ctx.json(mockProfilesStorage.get()[0]))
  ),
];

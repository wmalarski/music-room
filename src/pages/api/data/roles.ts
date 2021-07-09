import type { NextApiRequest, NextApiResponse } from "next";
import {
  selectRoles,
  SelectRolesReturn,
} from "../../../services/data/roles/selectRoles";
import { supabase } from "../../../services/supabase";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SelectRolesReturn[]>
): Promise<void> => {
  const { slug } = req.query;
  const roomSlug = Array.isArray(slug) ? slug.join("") : slug;

  console.log("roomSlug", roomSlug);

  const { user } = await supabase.auth.api.getUserByCookie(req);
  console.log("user", user);
  if (!user) {
    res.status(400).json([]);
    return;
  }

  const roles = await selectRoles({
    queryKey: [
      "roles",
      {
        roomSlug,
        userId: user.id,
      },
    ],
  });

  res.status(200).json(roles);
};

export default handler;

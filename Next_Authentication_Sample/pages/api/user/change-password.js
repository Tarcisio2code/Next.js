import { getSession } from "next-auth/client";

function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
 
  const session = getSession({ req: req });

  if (!session) {
    req.status(401).json({ message: "Not authenticated" });
    return;
  }
}

export default handler;

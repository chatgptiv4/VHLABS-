import { supabaseAdmin } from "../../src/integrations/supabase/client.server";

export async function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }
  return authorization.slice("Bearer ".length);
}

export async function getUser(request: Request) {
  const accessToken = await getAccessToken(request);
  const { data, error } = await supabaseAdmin.auth.getUser(accessToken);
  if (error || !data.user) {
    throw new Error("Unauthorized");
  }
  return data.user;
}

export async function requireAdmin(request: Request) {
  const user = await getUser(request);
  const { data, error } = await supabaseAdmin
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .eq("role", "admin")
    .maybeSingle();

  if (error) {
    console.error("[/api/admin] role check error", error);
    throw new Error("Forbidden");
  }
  if (!data) {
    throw new Error("Forbidden");
  }
  return user;
}

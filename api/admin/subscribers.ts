import { requireAdmin } from "./utils";
import { supabaseAdmin } from "../../src/integrations/supabase/client.server";

export const config = {
  runtime: "edge",
};

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

export default async function handler(request: Request) {
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: JSON_HEADERS,
    });
  }

  try {
    await requireAdmin(request);
    const { data, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("[/api/admin/subscribers] error", error);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: JSON_HEADERS,
      });
    }

    return new Response(JSON.stringify({ subscribers: data ?? [] }), {
      status: 200,
      headers: JSON_HEADERS,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 403,
      headers: JSON_HEADERS,
    });
  }
}

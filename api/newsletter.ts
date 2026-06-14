import { newsletterSchema } from "../src/lib/contact-schema";
import { supabaseAdmin } from "../src/integrations/supabase/client.server";

export const config = {
  runtime: "edge",
};

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: JSON_HEADERS,
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  if (parsed.data.website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: JSON_HEADERS,
    });
  }

  const { error } = await supabaseAdmin
    .from("newsletter_subscribers")
    .insert({ email: parsed.data.email });

  if (error && error.code !== "23505") {
    console.error("[/api/newsletter] insert error", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: JSON_HEADERS,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: JSON_HEADERS,
  });
}

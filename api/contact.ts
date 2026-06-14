import { contactSchema } from "../src/lib/contact-schema";
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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid input", issues: parsed.error.issues }), {
      status: 400,
      headers: JSON_HEADERS,
    });
  }

  const { error } = await supabaseAdmin.from("leads").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    company: parsed.data.company || null,
    budget: parsed.data.budget || null,
    message: parsed.data.message,
    source: "website",
  });

  if (error) {
    console.error("[/api/contact] insert error", error);
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

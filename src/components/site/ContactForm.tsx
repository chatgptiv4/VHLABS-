import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SITE, formspreeUrl } from "@/lib/site";

const empty: ContactInput = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
  website: "",
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<ContactInput>(empty);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof ContactInput>(k: K, v: ContactInput[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setLoading(true);
    try {
      // 1. Persist lead to our database (Supabase)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      }).catch(() => {
        /* non-blocking */
      });

      // 2. Send the email notification via Formspree
      const res = await fetch(formspreeUrl(SITE.formspree.contact), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          company: parsed.data.company,
          budget: parsed.data.budget,
          message: parsed.data.message,
          _subject: `New lead from ${parsed.data.name} — VHLabs`,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      toast.success("Message sent. We'll be in touch within one business day.");
      setForm(empty);
    } catch {
      toast.error("Could not send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-border bg-card p-6 sm:p-8 ${compact ? "" : "shadow-[var(--shadow-card)]"}`}
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input
            id="name"
            required
            value={form.name}
            maxLength={120}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            maxLength={255}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <Input
            id="phone"
            value={form.phone}
            maxLength={40}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Company" htmlFor="company" optional>
          <Input
            id="company"
            value={form.company}
            maxLength={160}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
        <Field label="Budget" htmlFor="budget" optional className="sm:col-span-2">
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select range</option>
            <option>Under $10k</option>
            <option>$10k – $25k</option>
            <option>$25k – $50k</option>
            <option>$50k – $100k</option>
            <option>$100k+</option>
          </select>
        </Field>
        <Field label="Project details" htmlFor="message" className="sm:col-span-2">
          <Textarea
            id="message"
            required
            rows={5}
            value={form.message}
            maxLength={4000}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your goals, timeline, and any specific security or compliance needs."
          />
        </Field>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to our privacy policy.
        </p>
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-1.5 inline-flex items-center gap-2 text-sm">
        {label}
        {optional && <span className="text-xs text-muted-foreground">Optional</span>}
      </Label>
      {children}
    </div>
  );
}

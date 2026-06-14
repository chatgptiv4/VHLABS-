import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, Mail, RefreshCw } from "lucide-react";
import { PageMeta } from "@/components/site/PageMeta";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};

export default function AdminLeadsPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      if (!data.session) {
        navigate("/login");
      } else {
        setReady(true);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/login");
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  const getAccessToken = async () => {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) throw new Error("Unauthorized");
    return token;
  };

  const fetchLeads = async () => {
    const token = await getAccessToken();
    const res = await fetch("/api/admin/leads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || "Unable to load leads");
    }
    return res.json();
  };

  const fetchSubscribers = async () => {
    const token = await getAccessToken();
    const res = await fetch("/api/admin/subscribers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || "Unable to load subscribers");
    }
    return res.json();
  };

  const leadsQ = useQuery({
    queryKey: ["admin", "leads"],
    queryFn: fetchLeads,
    enabled: ready,
    retry: false,
  });
  const subsQ = useQuery({
    queryKey: ["admin", "subs"],
    queryFn: fetchSubscribers,
    enabled: ready,
    retry: false,
  });

  async function signOut() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  const forbidden = leadsQ.error && /forbidden/i.test((leadsQ.error as Error).message);

  return (
    <>
            <PageMeta title="Lead Management \u2014 VHLabs Admin" robots="noindex,nofollow" />
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Admin</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">Lead management</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                All contact form and newsletter submissions, newest first.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  leadsQ.refetch();
                  subsQ.refetch();
                }}
              >
                <RefreshCw className="h-4 w-4 mr-2" /> Refresh
              </Button>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" /> Sign out
              </Button>
            </div>
          </div>

          {forbidden && (
            <div className="mt-8 rounded-lg border border-destructive/30 bg-destructive/5 p-5 text-sm">
              <p className="font-medium">You're signed in, but not an admin.</p>
              <p className="mt-1 text-muted-foreground">
                Open your Supabase project, find your user id in <code>auth.users</code>, and run:
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-background p-3 text-xs">
                {`insert into public.user_roles (user_id, role) values ('YOUR-USER-ID', 'admin');`}
              </pre>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-3">
              Leads {leadsQ.data ? `(${(leadsQ.data as { leads: Lead[] }).leads.length})` : ""}
            </h2>
            {leadsQ.isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
            {leadsQ.data && (leadsQ.data as { leads: Lead[] }).leads.length === 0 && (
              <p className="text-sm text-muted-foreground">No leads yet.</p>
            )}
            {leadsQ.data && (leadsQ.data as { leads: Lead[] }).leads.length > 0 && (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-medium">Received</th>
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium">Email</th>
                      <th className="px-4 py-3 font-medium">Company</th>
                      <th className="px-4 py-3 font-medium">Budget</th>
                      <th className="px-4 py-3 font-medium">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(leadsQ.data as { leads: Lead[] }).leads.map((l) => (
                      <tr key={l.id} className="align-top">
                        <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                          {new Date(l.created_at).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">{l.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <a className="text-primary hover:underline" href={`mailto:${l.email}`}>
                            {l.email}
                          </a>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">{l.company ?? "—"}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{l.budget ?? "—"}</td>
                        <td className="px-4 py-3 max-w-md">
                          <span className="line-clamp-3">{l.message}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4" /> Newsletter subscribers{" "}
              {subsQ.data
                ? `(${(subsQ.data as { subscribers: Subscriber[] }).subscribers.length})`
                : ""}
            </h2>
            {subsQ.data &&
              (subsQ.data as { subscribers: Subscriber[] }).subscribers.length === 0 && (
                <p className="text-sm text-muted-foreground">No subscribers yet.</p>
              )}
            {subsQ.data && (subsQ.data as { subscribers: Subscriber[] }).subscribers.length > 0 && (
              <ul className="rounded-lg border border-border divide-y divide-border text-sm">
                {(subsQ.data as { subscribers: Subscriber[] }).subscribers.map((s) => (
                  <li key={s.id} className="px-4 py-2 flex justify-between gap-4">
                    <span>{s.email}</span>
                    <span className="text-muted-foreground">
                      {new Date(s.created_at).toLocaleDateString()}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-12 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              ← Back to site
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

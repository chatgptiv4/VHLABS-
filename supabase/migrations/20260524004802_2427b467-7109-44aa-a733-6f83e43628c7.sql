
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  budget text,
  message text not null,
  source text default 'website'
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique
);

alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Anyone can submit a lead (contact form)
create policy "Anyone can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- Anyone can subscribe to newsletter
create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert
  to anon, authenticated
  with check (true);

-- No public read of leads or subscribers (admin-only via service role)

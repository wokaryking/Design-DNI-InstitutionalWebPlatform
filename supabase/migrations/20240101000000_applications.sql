-- Applications table for Trabaja con Nosotros submissions
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  reference_number text unique not null,
  first_name text not null,
  last_name text not null,
  national_id text not null,
  birth_date date not null,
  email text not null,
  phone text not null,
  origin_area text,
  photo_path text,
  cv_path text,
  requirements_confirmed boolean not null default false,
  privacy_consent boolean not null default false,
  status text not null default 'received',
  created_at timestamptz not null default now()
);

-- Row Level Security: no public reads/writes; only service role can query
alter table applications enable row level security;

-- Anon users can only INSERT (submit their own application)
create policy "Anon can insert applications"
  on applications
  for insert
  to anon
  with check (true);

-- No SELECT for anon — applications are write-only from the client
-- Service role bypasses RLS and can read/manage all rows

-- Storage: create private bucket for application files
-- Run this in the Supabase dashboard > Storage or via CLI:
-- insert into storage.buckets (id, name, public) values ('applications', 'applications', false);

-- Storage RLS: anon can upload to applications bucket (INSERT only, no SELECT)
-- create policy "Anon upload to applications bucket"
--   on storage.objects
--   for insert
--   to anon
--   with check (bucket_id = 'applications');

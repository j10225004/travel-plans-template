-- 第7週: 管理者だけがプランを登録・編集・削除でき、問い合わせを見られるようにする
-- 先に Supabase の「Authentication」→「Users」で管理者のユーザーを作っておきます。
-- 一番下の 'admin@example.com' を、作ったユーザーのメールアドレスに書き換えてから「Run」を押します。

-- 管理者の名簿
create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.admins enable row level security;

-- ログインした人は、自分が名簿に載っているかだけ確かめられる
create policy "自分が管理者か確かめられる"
  on public.admins for select
  to authenticated
  using (user_id = auth.uid());

grant select on public.admins to authenticated;

-- 名簿に載っている人かどうかを調べる関数
create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- 管理者だけがプランを追加・変更・削除できる
create policy "管理者はプランを追加できる"
  on public.plans for insert
  to authenticated
  with check (public.is_admin());

create policy "管理者はプランを変更できる"
  on public.plans for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "管理者はプランを削除できる"
  on public.plans for delete
  to authenticated
  using (public.is_admin());

grant insert, update, delete on public.plans to authenticated;

-- 管理者だけが問い合わせを見られる
create policy "管理者は問い合わせを見られる"
  on public.inquiries for select
  to authenticated
  using (public.is_admin());

grant select on public.inquiries to authenticated;

-- 管理者を名簿に登録する（メールアドレスを自分が作ったユーザーのものに書き換える）
insert into public.admins (user_id)
select id from auth.users where email = 'admin@example.com';

import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/pages';

/* Each published article gets its own page at blog/<slug>/, built from public/blog/posts.json.
   The blog editor (admin.html) commits that file, which redeploys the site. */
type Post = { slug: string; title: string; excerpt?: string; draft?: boolean };
const posts = (): Post[] =>
  (JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/blog/posts.json'), 'utf8')).posts as Post[]).filter(p => !p.draft);

export const dynamicParams = false;

export function generateStaticParams() {
  return posts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts().find(x => x.slug === slug);
  return pageMeta('blog', { 'li-slug': slug }, { title: `${p?.title || 'Blogs'} | Latch Infinity`, description: p?.excerpt || '' });
}

export default function Page() {
  return null;
}

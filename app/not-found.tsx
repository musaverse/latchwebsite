import type { Metadata } from 'next';

/* Unknown addresses show the home page, as the single-page site did. */
export const metadata: Metadata = {
  title: 'Page not found | Latch Infinity',
  robots: { index: false, follow: false },
  other: { 'li-route': 'home' },
};

export default function NotFound() {
  return null;
}

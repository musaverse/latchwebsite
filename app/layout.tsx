import Script from 'next/script';
import type { ReactNode } from 'react';
import type { Viewport } from 'next';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

const base = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
const icon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='8 4 298 410'%3E%3Cg fill='none' stroke='%23333A32' stroke-width='28'%3E%3Cpath d='M220.6 128.8A72 72 0 1 0 96.6 134.2L168 254'/%3E%3Cpath d='M93.4 225.2A72 72 0 1 0 217.4 219.8L140.2 101'/%3E%3Cpath d='M54 135H23.5V258A133 133 0 0 0 289.5 258V135H259'/%3E%3C/g%3E%3C/svg%3E";
const fonts = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62.5..125,300..700&family=Space+Grotesk:wght@300..700&family=EB+Garamond:wght@400..600&family=Montserrat:wght@300..700&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..500,0..100,0..1;1,9..144,300..500,0..100,0..1&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap';

/* Shared by every page. The page content, header, menus, footer and all motion come from
   public/assets/site.js, which reads the page's route from <meta name="li-route">.
   <base> lets the site's relative paths (img/…, video/…, about/) resolve from the site root on every page. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href={base} />
        <link rel="icon" href={icon} />
        <style dangerouslySetInnerHTML={{ __html: ':root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}' }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={fonts} />
        <link rel="stylesheet" href={`${base}assets/site.css`} />
      </head>
      <body>
        {children}
        <Script id="li-boot" strategy="afterInteractive">{`(function(){function L(s,n){var e=document.createElement('script');e.src=new URL(s,document.baseURI).href;if(n)e.onload=n;document.body.appendChild(e)}L('blog/md.js',function(){L('assets/site.js')})})();`}</Script>
      </body>
    </html>
  );
}

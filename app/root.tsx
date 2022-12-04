import type { MetaFunction, LinkDescriptor } from "@remix-run/node";
import { ConfigWindowContext } from './utils/config/context';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { preconnectFonts } from './utils/links/preconnects';

import mobileStyles from './styles/mobile.css';
import tabletStyles from './styles/tablet.css';
import desktopStyles from './styles/desktop.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Star Wars - Remix.run App",
  viewport: "width=device-width,initial-scale=1",
});

export function links(): LinkDescriptor[] {
  return [
    { href: "/favicon.ico", rel: "icon", type: "image/x-icon" },
    { href: mobileStyles, rel: 'stylesheet' },
    { href: tabletStyles, rel: 'stylesheet', media: '(min-width: 600px)' },
    { href: desktopStyles, rel: 'stylesheet', media: '(min-width: 1024px)' },
    ...preconnectFonts()
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <ConfigWindowContext />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

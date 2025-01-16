// @ts-nocheck
/* eslint-disable */
import { Viewport } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";
import "./overwrites.css";

const outfit = Outfit({ subsets: ["latin"] });

const title = "Nithly Wolf - Theme for VS Code";
const description = "A dark theme for Visual Studio Code.";

export const metadata = {
  metadataBase: new URL("https://jotacode.dev"),
  title,
  description,
  manifest: "https://jotacode.dev/manifest.json",
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@jotacode",
    images: ["https://jotacode.dev/og.jpg"],
  },
  openGraph: {
    title,
    description,
    url: "https://jotacode.dev",
    type: "website",
    images: ["https://jotacode.dev/og.jpg"],
  },
  icons: {
    icon: "https://jotacode.dev/icons/icon.svg",
    shortcut: "https://jotacode.dev/favicon.ico",
    apple: "https://jotacode.dev/icons/apple-icon.png",
  },
  appleWebApp: {
    title,
    statusBarStyle: "black",
    startupImage: ["https://jotacode.dev/icons/apple-icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  themeColor: "#09090b",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${outfit.className} flex h-full flex-col text-gray-600 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

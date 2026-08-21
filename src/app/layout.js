import { Analytics } from "@vercel/analytics/next"; // this is for Vercel Analytics, you can remove it if you don&apos;t want analytics
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Rasel Rana - BTCL",
  description:
    "Electrical & Electronic Engineer specializing in telecommunications. Portfolio launching soon.",
  metadataBase: new URL("https://raselrana.com.bd"),
  openGraph: {
    title: "Rasel Rana — BTCL",
    description:
      "Electrical & Electronic Engineer specializing in telecommunications. Portfolio launching soon.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body antialiased">
        <div className="bg-noise" aria-hidden="true" />
        {children}
        <Analytics /* this is for Vercel Analytics, you can remove it if you don&apos;t
        want analytics */
        />
      </body>
    </html>
  );
}

import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: "Your Name — Telecommunications Engineer",
  description:
    "Electrical & Electronic Engineer specializing in telecommunications. Portfolio launching soon.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Telecommunications Engineer",
    description:
      "Electrical & Electronic Engineer specializing in telecommunications. Portfolio launching soon.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <div className="bg-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

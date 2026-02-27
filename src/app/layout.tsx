import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RAWWFADEZ — Elite Cuts Only | Virginia Beach Barber",
  description:
    "5-star barber in Virginia Beach. Fades, tapers, braids, and lineups by Rah the Barber. Private suite. Book your cut now.",
  keywords: [
    "barber",
    "Virginia Beach",
    "fade",
    "taper",
    "lineup",
    "braids",
    "RAWWFADEZ",
    "Rah the Barber",
  ],
  openGraph: {
    title: "RAWWFADEZ — Elite Cuts Only",
    description:
      "5-star barber in Virginia Beach. Fades, tapers, braids, and lineups. Book now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

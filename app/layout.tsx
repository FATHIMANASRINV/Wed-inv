import type { Metadata } from "next";
import { Cormorant_Garamond, Amiri, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Mohammed Ashiq & Fathima Najiya Nasrin — Wedding Invitation",
  description: "A beautiful digital wedding invitation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${amiri.variable} ${vibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
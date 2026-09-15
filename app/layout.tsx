import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayesha & Ahmed — Wedding Invitation",
  description: "Bismillah — You are cordially invited to our Nikah ceremony",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
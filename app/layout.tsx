import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "V.A.K. • Netflix Resume",
  description:
    "Interactive cinematic resume for Vijaya Amruth Krishna Kavaturi",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}

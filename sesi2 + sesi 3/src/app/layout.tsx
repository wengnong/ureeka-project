import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winona's Minimalist Portfolio",
  description: "Study Case UREEKA Session 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedant | Portfolio ",
  description: "portfolio website of vedant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSR Tutorial",
  description: "boost performance practice",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html>
      <body>
        <h1><Link href='/'>Main Page</Link></h1>
        {children}
      </body>
    </html>
  );
}

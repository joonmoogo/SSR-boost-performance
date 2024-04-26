import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Appbar from "./_components/Appbar";
import config from "./_config/config";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
  title: config.name,
  description: config.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <html>
        <body>
          <Appbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

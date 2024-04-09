import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Appbar from "./components/Appbar";
import config from "./config/config";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
  title: config.name,
  description: config.description,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
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

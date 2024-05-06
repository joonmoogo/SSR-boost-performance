import type { Metadata } from "next";
import "./globals.scss";
import React from "react";
import Appbar from "./_components/Appbar";
import config from "./_config/config";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import SideNav from "./_components/SideNav";

export const metadata: Metadata = {
  title: config.name,
  description: config.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <html>
        <body>
          <SideNav/>
          <Appbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

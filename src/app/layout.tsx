import type { Metadata } from "next";
import "./globals.scss";
import React from "react";
import Appbar from "./_components/Appbar";
import config from "./_config/config";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import SideNav from "./_components/SideNav";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: config.name,
  description: config.description,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const headerList = headers();
  const viewport = headerList.get('x-viewport') as string;
  console.log(viewport)
  return (
    <>
      <html>
        <body>
          <SideNav/>
          <Appbar viewport={viewport}/>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/header";

import { AppContextProvider } from "@/AppContext/AppContextProvider";
import SearchModalRoot from "@/components/Modals/SearchModal";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased `}>
        <AppContextProvider>
          <Header />
          <main className="container mx-auto px-4 py-4">
            {children}
            <SearchModalRoot />
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Script from "next/script";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask The Doctor",
  description: "Get advice from the professionals, stop borrowing pills next door.",
};

const user = undefined

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <Script src="/custom.js" />
    </html>
  );
}

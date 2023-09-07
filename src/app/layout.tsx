import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Eric Huang | Personal",
  authors: [
    { name: "Eric Huang", url: "https://github.com/erich2s" },
    { name: "黄士崧", url: "https://github.com/erich2s" },
  ],
  description: "Eric Huang's personal portfolio website, 黄士崧的个人网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="container lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}

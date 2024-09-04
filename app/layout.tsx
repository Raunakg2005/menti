import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/mainnavbar/Navbar";
import Hero from "./components/mainhero/Hero";
import About1 from "./components/about/About1";
import About2 from "./components/about/About2";



const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      <Navbar />
      <Hero />
      <About1 />
      <About2 />
      </body>
    </html>
  );
}

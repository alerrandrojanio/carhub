import "./globals.css";
import { Manrope } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manpore = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Car Hub",
  description: "Discorver the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manpore.variable} relative font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { poppins, outfit } from "@/lib/font";
import Providers from "@/lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "SustainaMap",
  description: "SustainaMap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${outfit.variable} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}

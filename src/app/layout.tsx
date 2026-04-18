import type { Metadata } from "next";
import { Inter, Cairo, Bebas_Neue } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

const displayFont = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BT-ADV - We Innovate Your Vision",
  description: "BT-ADV - Premium Media Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Using 'ltr' by default, can be dynamically changed based on language toggle
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable} ${displayFont.variable}`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-yellow selection:text-navy">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

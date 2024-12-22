import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google"; // Import Hanken Grotesk
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], // Add desired weights
});

export const metadata: Metadata = {
  title: "Sol School of Music", // Updated title
  description: "Welcome to Sol School of Music - Coming Soon!", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - AutoCV - AI Resume Builder",
    absolute: "AutoCV - An AI Resume Builder"
  },
  description: "AutoCV is an excellent tool to craft perfect resume for yourself and it will help you land your dream role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

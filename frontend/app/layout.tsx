import type { Metadata } from "next";
import localFont from "next/font/local";
import { RootStyleRegistry } from "@/pages/Main";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Chatbot Dashboard",
  description: "Description of AI Chatbot Dashboard",
};

const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
});

const sfProRounded = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Rounded-Medium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Rounded-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-rounded",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sfProRounded.className} ${sfProDisplay.className}`}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}

"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@emotion/react";
import { useStore } from "@nanostores/react";
import { RootStyleRegistry } from "@/src/2_pages/Main";
import "./globals.css";

import { $theme } from "@/src/6_shared/store";

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
  const theme = useStore($theme);

  return (
    <html lang="en">
      <body className={`${sfProRounded.className} ${sfProDisplay.className}`}>
        <RootStyleRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}

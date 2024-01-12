"use client";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "react-query";
import { RootStyleRegistry } from "@/src/2_pages/Main";
import "./globals.css";

import { $theme } from "@/src/6_shared/store";
import { ThemeProvider } from "@/src/6_shared/contexts/ThemeContext";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sfProRounded.className} ${sfProDisplay.className}`}>
        <QueryClientProvider client={queryClient}>
          <RootStyleRegistry>
            <ThemeProvider>{children}</ThemeProvider>
          </RootStyleRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}

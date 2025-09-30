import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs Notion's clone",
  description: "Training to build Notion's clone with Nextjs",
  icons: {
    icon: "/dark-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-[#1f1f1f]" suppressHydrationWarning>
      <body
        className={cn( inter.className,"dark:bg-[#1f1f1f]")}
      >
        <ThemeProvider
              attribute="class"
              enableSystem
              defaultTheme="system"
              disableTransitionOnChange
              storageKey="eisa's-notion-theme"
            >
 
              {children}
            </ThemeProvider>
      </body>
    </html>
  );
}

import { ApiProvider } from "@repo/apis/providers/api-provider";
import "@repo/ui/globals.css";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Docs",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <ApiProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ApiProvider>
      </body>
    </html>
  );
}

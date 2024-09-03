import type { Metadata } from "next";
import HeaderLanding from "~/components/layouts/landing/header";

export const metadata: Metadata = {
  title: "Docs",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <main>{children}</main>;
}

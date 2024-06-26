import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "cordx.cx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

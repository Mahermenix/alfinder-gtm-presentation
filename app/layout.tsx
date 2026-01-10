import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfinder GTM Presentation",
  description: "Go-to-Market Strategy Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

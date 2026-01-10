import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfinder GTM Presentation",
  description: "AI-powered Arabic search that understands dialects - Go-to-Market Strategy",
  keywords: ["Alfinder", "Arabic search", "AI", "GTM strategy", "e-commerce", "MENA"],
  authors: [{ name: "Alfinder" }],
  openGraph: {
    title: "Alfinder GTM Presentation",
    description: "AI-powered Arabic search that understands dialects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

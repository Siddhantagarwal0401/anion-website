import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

// Modern sans-serif font
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Elegant serif font for headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

// Handwritten font for personal touches
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "3 Months With You ❤️",
  description: "A beautiful journey of our memories together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-modern antialiased bg-cream-100`}>
        {children}
      </body>
    </html>
  );
}

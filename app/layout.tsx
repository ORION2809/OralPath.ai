import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "OralPath | AI-Powered Oral Histopathology Analysis",
  description:
    "OralPath is an AI-powered oral histopathology assistant that enables oral pathologists, dental professionals, researchers, and students to analyze microscope slide images and receive AI-assisted classifications within seconds.",
  keywords: [
    "oral pathology",
    "histopathology",
    "AI",
    "machine learning",
    "oral cancer",
    "OSCC",
    "OSMF",
    "medical imaging",
  ],
  openGraph: {
    title: "OralPath | AI-Powered Oral Histopathology Analysis",
    description:
      "Analyze microscope slide images and receive AI-assisted classifications within seconds.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${notoSans.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

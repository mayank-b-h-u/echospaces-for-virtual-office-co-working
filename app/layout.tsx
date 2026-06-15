import type { Metadata } from "next";
import { Anton, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MousePathTracker from "@/components/ui/MousePathTracker";

// ── Dishora Display Font: Anton ──
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// ── Body Font: DM Sans ──
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EchoSpaces — Premium Office & Coworking Spaces in Delhi NCR",
  description:
    "Discover premium office spaces and coworking solutions across Delhi NCR. From furnished offices to collaborative workspaces — EchoSpaces has you covered.",
  keywords: ["office space", "coworking", "Delhi NCR", "Gurgaon", "Noida", "leasing"],
  openGraph: {
    title: "EchoSpaces — Premium Office & Coworking Spaces",
    description:
      "Find the perfect workspace in Delhi NCR. Premium offices, coworking desks, and virtual offices starting from ₹5K/month.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#FDFEFB] antialiased"
        suppressHydrationWarning
      >
        <ScrollProgress />
        <ScrollToTop />

        <Navbar />
        <main className="w-full flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

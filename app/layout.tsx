import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metro Associates — DOT & Infrastructure Staffing and Executive Search",
  description:
    "Metro Associates is a national staffing and executive search firm for Departments of Transportation and public infrastructure. We place vetted engineers, inspectors, and construction leaders — backed by a 90-day guarantee.",
  keywords: [
    "DOT staffing",
    "transportation recruiting",
    "infrastructure staffing",
    "executive search",
    "civil engineering recruiters",
    "construction inspection staffing",
  ],
  openGraph: {
    title: "Metro Associates — DOT & Infrastructure Staffing",
    description:
      "Faster engineering hiring, backed by a 90-day guarantee. Specialized placement for Departments of Transportation and public infrastructure agencies.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-navy-950 font-sans text-ink-100">
        <Navbar />
        {children}
        <Footer />

        <script
          id="nextivacx-code-snippet"
          src="https://d3po7etsbw5eiv.cloudfront.net/Simplify360Chat.js?key=NmEwZjA4YjU3MjcxYzg4MWY3YjMwOGI0fDQxNzIzNzA="
        ></script>
      </body>
    </html>
  );
}

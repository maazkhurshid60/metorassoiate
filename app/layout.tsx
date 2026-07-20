import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Metro Associates — DOT & Infrastructure Staffing and Executive Search",
  description:
    "Metro Associates is a national staffing and executive search firm for Departments of Transportation and public infrastructure. We place vetted engineers, inspectors, and construction leaders — backed by a placement guarantee.",
  keywords: [
    "DOT staffing",
    "transportation recruiting",
    "infrastructure staffing",
    "executive search",
    "civil engineering recruiters",
    "construction inspection staffing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Metro Associates — DOT & Infrastructure Staffing",
    description:
      "Faster engineering hiring, backed by a placement guarantee. Specialized placement for Departments of Transportation and public infrastructure agencies.",
    url: SITE_URL,
    siteName: "Metro Associates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Associates — DOT & Infrastructure Staffing",
    description:
      "Faster engineering hiring, backed by a placement guarantee. Specialized placement for Departments of Transportation and public infrastructure agencies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Patrick Novick",
  jobTitle: "Professional Recruiter",
  description:
    "Elite professional recruiter with 35+ years of experience placing talent at Fortune 100/500 companies across government, defense, and commercial sectors.",
  url: "https://patricknovick.com",
  telephone: "(239) 255-5921",
  email: "patrick@patricknovick.com",
  worksFor: {
    "@type": "Organization",
    name: "Metro Associates",
    url: SITE_URL,
  },
  knowsAbout: [
    "Executive Recruiting",
    "Talent Acquisition",
    "Engineering Recruitment",
    "DOT and Transportation",
    "MEP Engineering",
    "Government and Defense Staffing",
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

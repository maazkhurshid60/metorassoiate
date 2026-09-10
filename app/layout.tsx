import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { JsonLd } from "./components/JsonLd";
import { organizationSchema, websiteSchema } from "./lib/seo";
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
  title: "Metro Associates | DOT & Infrastructure Recruiters",
  description:
    "Specialist engineering recruiters for state DOTs and public infrastructure. We place licensed PEs, inspectors and construction leaders nationwide.",
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
    title: "Metro Associates | DOT & Infrastructure Staffing",
    description:
      "Specialist engineering recruiters for state DOTs and public infrastructure. We place licensed PEs, inspectors and construction leaders nationwide.",
    url: SITE_URL,
    siteName: "Metro Associates",
    type: "website",
    images: [{ url: "/interchange-sunset.jpg", width: 1200, height: 630, alt: "Metro Associates, DOT & infrastructure staffing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Associates | DOT & Infrastructure Staffing",
    description:
      "Specialist engineering recruiters for state DOTs and public infrastructure. We place licensed PEs, inspectors and construction leaders nationwide.",
    images: ["/interchange-sunset.jpg"],
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
    "Specialist engineering recruiters for state DOTs and public infrastructure. We place licensed PEs, inspectors and construction leaders nationwide.",
  url: "https://patricknovick.com",
  telephone: "(312) 500-1878",
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
        <JsonLd data={[organizationSchema(), websiteSchema(), jsonLd]} />
        <ChatWidget />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { NavBar } from "@/components/ui/NavBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.fullName} (${siteConfig.name}) — Developer Portfolio`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description} Built by ${siteConfig.fullName} (Japh).`,
  keywords: [
    siteConfig.name,
    siteConfig.fullName,
    "CJ Poledo",
    "developer portfolio",
    "Next.js developer",
    "full-stack developer Philippines",
    "software engineer",
    "web developer",
    "React developer",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.siteUrl }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      className={`${jetbrainsMono.variable} ${inter.variable} dark`}
      style={{ colorScheme: "dark" }}
      data-scroll-behavior="smooth"
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <JsonLd />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

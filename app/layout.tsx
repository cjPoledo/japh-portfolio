import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { NavBar } from "@/components/ui/NavBar";
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

export const metadata: Metadata = {
  title: "Japh — Developer",
  description:
    "I build things that work. Portfolio of tools, websites, webapps, games, and software.",
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
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

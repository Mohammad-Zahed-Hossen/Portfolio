import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammad-zahed-hossen.vercel.app"),
  title: {
    default: `${siteConfig.name} | AI & ML Engineering Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.positioningStatement,
  keywords: [
    "Mohammad Zahed Hossen",
    "AI Systems",
    "Machine Learning Engineer",
    "Evaluation Workflows",
    "Document Intelligence",
    "VLM Research",
    "Full-Stack Engineering",
    "Chattogram Bangladesh",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammad-zahed-hossen.vercel.app",
    title: `${siteConfig.name} | AI & ML Engineering Portfolio`,
    description: siteConfig.positioningStatement,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/assets/images/zahed-portrait.png",
        width: 1254,
        height: 1254,
        alt: "Mohammad Zahed Hossen - AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI & ML Engineering Portfolio`,
    description: siteConfig.positioningStatement,
    images: ["/assets/images/zahed-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Accessible Skip to Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
          >
            Skip to main content
          </a>

          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

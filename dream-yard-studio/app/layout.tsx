import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Yard Studio - Professional Landscape Design & Renovation",
  description: "Transform your outdoor space with professional landscape design and renovation services. Serving American homeowners with custom yard transformations, garden design, and outdoor living spaces.",
  keywords: "landscape design, garden renovation, outdoor living, yard transformation, landscape contractor, garden design, patio design, outdoor kitchen",
  authors: [{ name: "Dream Yard Studio" }],
  creator: "Dream Yard Studio",
  publisher: "Dream Yard Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dreamyardstudio.com'),
  openGraph: {
    title: "Dream Yard Studio - Professional Landscape Design & Renovation",
    description: "Transform your outdoor space with professional landscape design and renovation services.",
    url: 'https://dreamyardstudio.com',
    siteName: 'Dream Yard Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Yard Studio - Professional Landscape Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dream Yard Studio - Professional Landscape Design & Renovation",
    description: "Transform your outdoor space with professional landscape design and renovation services.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D2691E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

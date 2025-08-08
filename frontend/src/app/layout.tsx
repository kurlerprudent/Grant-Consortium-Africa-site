import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

// Configure Poppins font for headings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Configure Roboto font for body text
const roboto = Roboto({
  variable: "--font-roboto", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grant Consortium Africa | Empowering African Development",
  description: "Grant Consortium Africa (GCA) is a leading development organization dedicated to fostering sustainable growth and innovation across the African continent through strategic partnerships and comprehensive support programs.",
  keywords: ["Grant Consortium Africa", "African development", "development organization", "Africa", "grants", "consortium", "capacity building", "project management", "partnerships"],
  authors: [{ name: "Grant Consortium Africa" }],
  creator: "Grant Consortium Africa",
  publisher: "Grant Consortium Africa",
  metadataBase: new URL("https://grantconsortiumafrica.org"), // Update with your actual domain
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.jpg', // Using logo as apple touch icon
  },
  openGraph: {
    title: "Grant Consortium Africa | Empowering African Development",
    description: "Leading development organization fostering sustainable growth and innovation across the African continent through strategic partnerships and comprehensive support programs.",
    type: "website",
    locale: "en_US",
    siteName: "Grant Consortium Africa",
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Grant Consortium Africa',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Consortium Africa | Empowering African Development",
    description: "Leading development organization fostering sustainable growth and innovation across Africa",
    images: ['/logo.jpg'],
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-body text-text-secondary bg-background antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

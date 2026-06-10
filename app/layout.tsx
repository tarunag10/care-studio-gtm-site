import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://care-studio.vercel.app"),
  title: {
    default: "Care Studio",
    template: "%s | Care Studio"
  },
  description: "Local Mac cleanup review.",
  openGraph: {
    title: "Care Studio",
    description: "Local Mac cleanup review.",
    url: "https://care-studio.vercel.app",
    siteName: "Care Studio",
    images: [
      {
        url: "/assets/screenshots/dashboard.jpg",
        width: 1280,
        height: 800,
        alt: "Care Studio dashboard"
      }
    ],
    type: "website"
  },
  icons: {
    icon: "/assets/icons/app-icon-1024.jpg",
    apple: "/assets/icons/app-icon-1024.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

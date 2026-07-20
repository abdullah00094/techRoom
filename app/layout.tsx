import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DirManager } from "@/components/utils/DirManager";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TechRoom – IT Infrastructure & Security Solutions | Alexandria, Egypt",
    template: "%s | TechRoom",
  },
  description:
    "TechRoom provides CCTV installation, network setup, and IT support for businesses in Alexandria, Egypt. Secure, reliable, professional. Request a free consultation.",
  icons: {
    icon: "/images/techroom-logo.png",
    shortcut: "/images/techroom-logo.png",
    apple: "/images/techroom-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/techroom-logo.png" />
        <link rel="apple-touch-icon" href="/images/techroom-logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var path = window.location.pathname;
                var dir = 'ltr';
                var lang = 'en';
                if (path.startsWith('/ar')) {
                  dir = 'rtl';
                  lang = 'ar';
                } else if (path.startsWith('/en')) {
                  dir = 'ltr';
                  lang = 'en';
                }
                document.documentElement.setAttribute('dir', dir);
                document.documentElement.setAttribute('lang', lang);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <DirManager />
        {children}
      </body>
    </html>
  );
}

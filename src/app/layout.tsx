import { Montserrat as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

import { NavBar } from "./_components/navbar";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = localFont({
  src: [
    {
      path: "./fonts/minion-pro/MinionPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-MediumIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-SemiboldIt.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-BoldIt.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});

export const metadata = {
  title: "PMB | HIMARPL",
  description:
    "Penerimaan Mahasiswa Baru (PMB) RPL UPI: Informasi pendaftaran, jadwal, dan syarat PMB program studi RPL Kampus UPI di Cibiru.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL("https://pmb.himarpl.com"),
  openGraph: {
    title: "PMB | HIMARPL",
    description:
      "Penerimaan Mahasiswa Baru (PMB) RPL UPI: Informasi pendaftaran, jadwal, dan syarat PMB program studi RPL Kampus UPI di Cibiru.",
    siteName: "PMB | HIMARPL",
    images: "https://pmb.himarpl.com/opengraph-image.gif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMB | HIMARPL",
    description:
      "Penerimaan Mahasiswa Baru (PMB) RPL UPI: Informasi pendaftaran, jadwal, dan syarat PMB program studi RPL Kampus UPI di Cibiru.",
    creator: "@himarpl",
    images: ["https://pmb.himarpl.com/twitter-image.gif"], // Must be an absolute URL
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <TRPCReactProvider>
          <NavBar />
          {children}

          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

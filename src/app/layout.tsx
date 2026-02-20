import type { Metadata } from "next";
import { Roboto_Flex, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "UNC NSTP | University of Nueva Caceres",
  description:
    "National Service Training Program - University of Nueva Caceres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${poppins.variable} font-body antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

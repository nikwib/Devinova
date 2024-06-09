import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devinova | Spark your potential",
  description:
    "Devinova is a consulting company that helps you grow your business leveraging the latest AI technologies and methodologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral200 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

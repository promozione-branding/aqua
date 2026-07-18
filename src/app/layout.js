import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "../../components/LandingPage/Navbar";
import Footer from "../../components/LandingPage/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Crystal Impex",
  description: "Premium RO Cabinets & Water Purifiers",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
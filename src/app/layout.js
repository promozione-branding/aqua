import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

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
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
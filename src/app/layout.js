import "./globals.css";
import { Vidaloka } from "next/font/google";
import GlobalHeader from "@/components/Header/GlobalHeader";
import Footer from "@/components/home/Footer";

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vidaloka.className} font-sans`}>
        <GlobalHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

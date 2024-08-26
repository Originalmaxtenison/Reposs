import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Home/Footer/Footer";
import Scrolltop from "@/components/Helper/Scrolltop";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  generator: "React",
  applicationName: "Reposso",
  creator: "Krishna",
  keywords: [
    "Reposso",
    "Reposso Tiles",
    "Tiles",
    "reposso",
    "reposso tiles",
    "posso",
    "Raposso",
    "raposso",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <Scrolltop />
      </body>
    </html>
  );
}

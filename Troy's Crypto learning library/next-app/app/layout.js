import "./globals.css";
import { Inter } from "next/font/google";
import FacesBadge from "@/components/FacesBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Troy's Crypto learning library",
  description:
    "A collection of the best resources for learning Crypto from the Internet, hand-picked and curated by Troy Yan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FacesBadge />
        {children}
      </body>
    </html>
  );
}

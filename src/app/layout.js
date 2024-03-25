import Header from "@/components/Header";
import { Inter, Noto_Sans_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";

const mainFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "david basile",
  description: "david basile director portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} text-sm dark:bg-black dark:text-neutral-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

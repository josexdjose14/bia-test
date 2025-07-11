import type { Metadata } from "next";
import '@/app/ui/global.css';
import { nunito_sans } from "./ui/fonts";
import HomeHeader from "@/app/ui/homeHeader";

export const metadata: Metadata = {
  title: "BIA technical challenge",
  description: "This is a Frontend technical challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.className} antialiased bg-light-background dark:bg-dark-background`}
      >
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Side Projects",
  description: "Side Projects ",
  icons: {
    icon: {url: "/icon.svg"}
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

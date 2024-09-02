import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({ src: "./NeueMontreal-Light.otf" });

export const metadata = {
  title: "Ivan Inozemtsev | UX/UI Designer Portfolio - Creating Visual Solutions that Inspire the World",
  description: "Welcome to the portfolio of Ivan Inozemtsev, a UX/UI designer and Illustrator focused on creating visually appealing and user-friendly digital products.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <head />
      <body  className="w-full h-full">{children}</body>
    </html>
  );
}
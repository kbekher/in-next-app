import localFont from "next/font/local";
// import { Montserrat } from "next/font/google";
import Link from "next/link";

// These styles apply to every route in the application
import "./global.css";
import styles from "./rootStyle.module.css";

const myFont = localFont({ src: "./NeueMontreal-Light.otf" });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href={"/home"}>
              GLOBOMANTICS
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLinks} href="/blog">
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/settings">
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/conference">
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
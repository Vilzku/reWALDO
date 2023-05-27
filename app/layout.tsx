import "normalize.css";
import "../styles/_globals.scss";

import { Roboto } from "next/font/google";

export const metadata = {
  title: "reWALDO",
  description: "Hmm...",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

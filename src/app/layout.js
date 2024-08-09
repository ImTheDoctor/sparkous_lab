import { Spline_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const spline_sans = Spline_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sparkous Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spline_sans.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

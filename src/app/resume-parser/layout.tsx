import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Speed Wings Resume Parser",
  description:
    "Speed Wings Resume Parser allows everyone to parse a resume. For people with an existing resume, Speed Wings Resume Builder and Parser also provides a resume parser to help test and confirm its ATS readability."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}

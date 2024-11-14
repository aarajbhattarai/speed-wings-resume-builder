import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Speed Wings Resume Importer",
  description:
    "Speed Wings Resume Import allows everyone to import a resume and create a new one. For those who have an existing resume, Speed Wings Resume Builder and Parser also provides a resume parser to help test and confirm its ATS readability."
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

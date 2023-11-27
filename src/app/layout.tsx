import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The PreFactor | The Creative Coaching Company",
  description:
    "Unleashing Innovation for Tomorrow's Challenges. Explore a range of training programs designed to empower your workforce with the skills needed to thrive in a competitive business landscape. Elevate Your Team's Potential with Corporate Training partnered with experts",
  openGraph: {
    title: "The PreFactor | The Creative Coaching Company",
    description:
      "Unleashing Innovation for Tomorrow's Challenges. Explore a range of training programs designed to empower your workforce with the skills needed to thrive in a competitive business landscape. Elevate Your Team's Potential with Corporate Training partnered with experts",
  },
  twitter: {
    title: "The PreFactor | The Creative Coaching Company",
    description:
      "Unleashing Innovation for Tomorrow's Challenges. Explore a range of training programs designed to empower your workforce with the skills needed to thrive in a competitive business landscape. Elevate Your Team's Potential with Corporate Training partnered with experts",
  },
  icons: ["/public/favicon.png", "/public/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

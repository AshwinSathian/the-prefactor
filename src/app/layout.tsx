import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "The PreFactor | Your Creative Coaching Partner - Premier Corporate Training and Professional Development Solutions",
  description:
    "Elevate your team’s potential with The ProFactor’s corporate training programs. Explore our professional development, leadership training, and personalized coaching services designed for business excellence",
  openGraph: {
    title:
      "The PreFactor | Your Creative Coaching Partner - Premier Corporate Training and Professional Development Solutions",
    description:
      "Elevate your team’s potential with The ProFactor’s corporate training programs. Explore our professional development, leadership training, and personalized coaching services designed for business excellence",
  },
  twitter: {
    title:
      "The PreFactor | Your Creative Coaching Partner - Premier Corporate Training and Professional Development Solutions",
    description:
      "Elevate your team’s potential with The ProFactor’s corporate training programs. Explore our professional development, leadership training, and personalized coaching services designed for business excellence",
  },
  icons: ["/public/favicon.png", "/public/favicon.ico"],
  keywords: [
    "Corporate Training",
    "Professional Development Programs",
    "B2B Training Solutions",
    "Leadership Skills Training",
    "Career Development Programs",
    "Personal Coaching Services",
    "Organizational Training",
    "Business Coaching Solutions",
    "Employee Skill Enhancement",
    "Executive Coaching Services",
    "Customized Training Programs",
    "Corporate Learning Workshops",
    "Team Building Training",
    "Management Development Programs",
    "Professional Coaching Services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="vuKVBhnZ3XiP7AOIJ5boOHpf-uWMi37hs1YXWLO9xfM"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

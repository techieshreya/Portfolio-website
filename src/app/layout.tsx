import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code, Permanent_Marker } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shreya Gupta — Backend Engineer & AI Systems Developer",
  description:
    "Portfolio of Shreya Gupta — B.Tech CSE specializing in SRE/DevOps, Agentic AI, and backend engineering. Currently at Orange Business.",
  keywords: [
    "Shreya Gupta",
    "Backend Engineer",
    "Agentic AI",
    "DevOps",
    "SRE",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} ${permanentMarker.variable} min-h-screen relative overflow-x-hidden font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

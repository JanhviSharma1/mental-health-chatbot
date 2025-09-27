import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CustomCursor from "@/components/CustomCursor";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Therapist Companion",
  description: "Your personal AI therapist for stress & anxiety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${josefinSans.variable} font-sans antialiased`}>
          <CustomCursor />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love - Portfolio",
  description:
    "Love's Web Developer Portfolio - A beginner web developer showcasing projects and skills in HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js. Explore my journey in front-end development and see my progress.",
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

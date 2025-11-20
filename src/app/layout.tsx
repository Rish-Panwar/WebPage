import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

// import Header from "@/components/header";


const inter = Inter({subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Rishabh Panwar",
  description: "Full Stack Developer & AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${sora.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>            
            <main className="bg-slate-900 min-h-screen overflow-x-hidden text-white">
          {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

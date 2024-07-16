import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingNavDemo } from "@/components/FloatNav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manash Barai Portfolio",
  description: "Next.js developer with type script expert on java script project on node.js react.js express mongo , basically react js developer as well as next js developer ",
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
            
            <BackgroundBeams />
            <FloatingNavDemo/> 
            
            {children}
            <SpeedInsights />
            </ThemeProvider>
            
            </body>
    </html>
  );
}

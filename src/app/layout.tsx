import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col items-center">
        <header className='flex justify-between w-full max-w-4xl pt-2 pb-5 pl-5 pr-5'>
          <div className='flex items-center'>
            <h2>OCPP Charging Station Simulator</h2>
            {/* Otros elementos futuros a la izquierda */}
          </div>
          <div className='flex items-center'>
            {/* Otros elementos futuros a la derecha */}
            <ThemeSwitcher />
          </div>
        </header>
        <main className="w-full max-w-4xl p-5">
          {children}
        </main>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
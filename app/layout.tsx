import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header"; 
import { FormProvider } from '@/components/form/FormContext';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster for toast notifications

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buena - Find Your Perfect Apartment",
  description: "Start your journey to find the perfect apartment with Buena. Register now to explore available listings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider> 
          <Header /> 
          <main className="pt-16"> 
            {children}
          </main>
          <Toaster /> {/* Include the Toaster for displaying toast notifications */}
        </FormProvider>
      </body>
    </html>
  );
}
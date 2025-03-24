import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import AuthenProvider from "./context/AuthenContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern E-Commerce",
  description: "A modern e-commerce experience built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthenProvider>
            <CartProvider>
              {children}
              <Toaster />
            </CartProvider>
          </AuthenProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

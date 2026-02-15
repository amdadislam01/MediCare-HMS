import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardLayout from "./DashboardLayout";
import SessionProvider from "@/components/providers/SessionProvider";
import { CartProvider } from "@/context/CartContext";
// import Navbar from "@/components/shared/navbar/Navbar";
// import Footer from "@/components/shared/footer/Footer"; //added DashboardLayout to hide navbar by tushar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediCare - Healthcare Management System",
  description:
    "Comprehensive healthcare management system with patient care, appointments, and medical services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header>
          <Navbar />
        </header> */}

        {/* <main>{children}</main> */}
        <SessionProvider>
          <CartProvider>
            <DashboardLayout>{children}</DashboardLayout>
          </CartProvider>
        </SessionProvider>

        {/* <footer className="">
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

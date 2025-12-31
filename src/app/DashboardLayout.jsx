"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar = pathname.startsWith("/dashboard/pharmacy");

  return (
    <>
      {!hideNavbar && (
        <header>
          <Navbar />
        </header>
      )}

      <main>{children}</main>

      {!hideNavbar && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}

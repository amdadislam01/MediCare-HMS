"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}


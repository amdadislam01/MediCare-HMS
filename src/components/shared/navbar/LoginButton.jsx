"use client";

import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <div className="w-24 h-10 bg-primary-light rounded-lg animate-pulse"></div>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        {/* Dashboard Button - Always Visible */}
        <Link
          href="/"
          className="
            group relative inline-flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-primary
            text-white
            font-semibold
            overflow-hidden
            transition-all duration-500
            hover:bg-primary-dark
            hover:shadow-md
            active:scale-95
            cursor-pointer
          "
        >
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <LayoutDashboard className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
        
        {/* Logout Button - Desktop Only */}
        <button
          onClick={handleLogout}
          className="
            hidden lg:inline-flex
            group relative items-center gap-2
            px-4 py-2
            rounded-lg
            bg-primary
            text-white
            font-semibold
            overflow-hidden
            transition-all duration-500
            hover:bg-primary-dark
            hover:shadow-md
            active:scale-95
            cursor-pointer
          "
        >
          <LogOut className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="
        group relative inline-flex items-center gap-2
        px-4 py-2
        rounded-lg
        border-2 border-blue-600
        text-blue-600 
        font-semibold
        overflow-hidden
        transition-all duration-500
        hover:text-white
        hover:shadow-md
        active:scale-95
        cursor-pointer
      "
    >
      <span
        className="
          absolute inset-0
          bg-blue-600
          scale-x-0
          origin-left
          transition-transform duration-500
          group-hover:scale-x-100
          -z-10
        "
      />
      <LogIn className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 " />
      Login
    </Link>
  );
};

export default LoginButton;

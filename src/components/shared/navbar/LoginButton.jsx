"use client";

import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut({ callbackUrl: "/" });
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  if (status === "loading") {
    return (
      <div className="w-24 h-10 bg-primary-light rounded-lg animate-pulse"></div>
    );
  }

  if (session) {
    const userInitial = session.user?.name?.charAt(0)?.toUpperCase() || "?";
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center gap-2
            p-2
            rounded-lg
            bg-primary-light
            text-primary
            font-semibold
            overflow-hidden
            transition-all duration-500
            hover:bg-primary
            hover:text-white
            hover:shadow-md
            active:scale-95
            cursor-pointer
          "
        >
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
            {userInitial}
          </div>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-card rounded-lg shadow-lg py-1 z-150 border border-default">
            <div className="p-4 text-primary font-medium border-b border-default">
              {session.user?.name || session.user?.email || "User"}
            </div>
            <Link
              href="/"
              onClick={handleMenuClick}
              className="block px-4 py-2 text-blue hover:bg-primary-light   transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 inline mr-2" />
              Dashboard
            </Link>
            <div className=" p-3">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-error bg-error hover:bg-error hover:text-error transition-colors cursor-pointer text-center"
              >
                <LogOut className="w-4 h-4 inline mr-2" />
                Logout
              </button>
            </div>
          </div>
        )}
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
        border
        border-blue-500
        text-blue-500 
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
          bg-primary
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

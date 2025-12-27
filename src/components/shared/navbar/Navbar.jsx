"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Home, Info, Menu, Phone, X } from "lucide-react";
import NavLink from "./NavLink";
import Logo from "../logo/Logo";
import SideNavLink from "./SideNavLink";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const [showImage, setShowImage] = useState(true);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        isDrawerOpen
      ) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDrawerOpen]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-primary-light shadow-md fixed w-full top-0 z-50">
        {pathname === "/" && (
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              showImage ? "max-h-15 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Image
              src="https://zenui.net/palestine-banner.svg"
              alt="Free Palestine"
              width={15}
              height={15}
              className="w-full h-15 object-cover"
            />
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Menu button (mobile) */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* logo */}
            <div className="flex-1 flex justify-start lg:flex-none">
              <Logo />
            </div>

            {/* Nav Links  */}
            <div className="hidden lg:flex items-center space-x-5">
              <NavLink href={"/"}>
                {" "}
                <Home className="w-4 " /> Home
              </NavLink>
              <NavLink href={"#about"}>
                {" "}
                <Info className="w-4 " /> About
              </NavLink>
              <NavLink href={"#contact"}>
                <Phone className="w-4" /> Contact
              </NavLink>
            </div>

            {/* login button */}
            <div className="flex items-center">
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? "opacity-80 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      ></div>

      {/* Small Screen Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <Logo size="sm" />
          <button
            onClick={closeDrawer}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* small screen nav links */}
        <div className="py-4">
          <SideNavLink href="/" onClick={closeDrawer}>
            Home
          </SideNavLink>
          <SideNavLink href="#about" onClick={closeDrawer}>
            About
          </SideNavLink>
          <SideNavLink href="#contact" onClick={closeDrawer}>
            Contact
          </SideNavLink>
        </div>
      </div>
    </>
  );
}

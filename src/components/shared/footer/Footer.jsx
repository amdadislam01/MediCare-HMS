import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "Find a Doctor",
    "Book Appointment",
    "Health Records",
    "Prescription Refill",
    "Lab Results",
    "Billing & Insurance",
  ];

  const services = [
    "Primary Care",
    "Urgent Care",
    "Telemedicine",
    "Mental Health",
    "Physical Therapy",
    "Diagnostic Services",
  ];

  const resources = [
    "Patient Portal",
    "Health Library",
    "Medicare Plans",
    "FAQ",
    "Blog",
    "Careers",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="relative -mt-1">
        <svg className="w-full h-20 md:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,80 C120,120 240,120 360,90 480,60 600,40 720,45 840,50 960,80 1080,85 1200,90 1320,70 1440,50 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-0 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl">
                <Heart className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Medicare
                </h2>
                <p className="text-xs text-gray-400">Caring for Your Health</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Delivering exceptional healthcare services with compassion and expertise.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Healthcare Ave, NY 10001</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>support@medicareplus.com</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="bg-white/10 hover:bg-blue-500 p-2 rounded-lg transition"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {[["Quick Links", quickLinks], ["Our Services", services], ["Resources", resources]].map(
            ([title, items], i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-6 rounded-xl bg-blue-500/10 border border-blue-400/30">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-sm text-gray-300">
                Subscribe for healthcare updates
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-4 py-3 rounded-lg bg-white/10 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p>© {new Date().getFullYear()} Medicare. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-blue-400">Privacy</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
            <a href="#" className="hover:text-blue-400">Cookies</a>
            <a href="#" className="hover:text-blue-400">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

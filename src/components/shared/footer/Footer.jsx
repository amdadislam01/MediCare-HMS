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
    <footer className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="relative -mt-1">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C120,120 240,120 360,90 480,60 600,40 720,45 840,50 960,80 1080,85 1200,90 1320,70 1440,50 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-linear-to-br from-blue-400 to-cyan-500 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Medicare
                </h2>
                <p className="text-xs text-gray-400">Caring for Your Health</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delivering exceptional healthcare services with compassion and
              expertise. Your health and well-being are our top priorities.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Healthcare Ave, Medical District, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-gray-300">support@medicareplus.com</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <button
                  key={idx}
                  className="bg-white/10 hover:bg-blue-500 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label={`Social media link ${idx + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 text-sm flex items-center group transition-all duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 text-sm flex items-center group transition-all duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 text-sm flex items-center group transition-all duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">
                Stay Updated on Health Tips
              </h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest healthcare insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-blue-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm min-w-62.5"
              />
              <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Medicare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

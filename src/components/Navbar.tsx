"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nstpLogo from "@/assets/NSTP.png";

const navItems = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Vision", href: "/vision" },
      { label: "Mission", href: "/mission" },
      { label: "CWTS", href: "/cwts" },
      { label: "ROTC", href: "/rotc" },
      { label: "LTS", href: "/lts" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "What is NSTP?", href: "/about/what-is-nstp" },
      { label: "Program Objectives", href: "/about/program-objectives" },
      { label: "Organizational Chart", href: "/about/organizational-chart" },
      { label: "NSTP Student Council", href: "/about/nstp-student-council" },
    ],
  },
  { label: "Memos & Guidelines", href: "/memos-guidelines" },
  { label: "Downloadables", href: "/downloadables" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-600 to-red-500" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Image
              src={nstpLogo}
              alt="UNC NSTP Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-lg leading-tight text-gray-900">
                National Service Training Program
              </p>
              <p className="text-xs text-gray-500">
                University of Nueva Caceres
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-red-50 text-red-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute left-0 top-full min-w-[220px] rounded-lg border border-gray-200 bg-white py-2 shadow-xl transition-all duration-200 ${
                      openDropdown === item.label
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-red-50 text-red-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 pb-4 pt-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(item.href) && !item.children
                      ? "bg-red-50 text-red-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg py-2 pl-8 pr-3 text-sm transition-colors ${
                      isActive(child.href)
                        ? "bg-red-50 text-red-700"
                        : "text-gray-500 hover:bg-gray-50 hover:text-red-600"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

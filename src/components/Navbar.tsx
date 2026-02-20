"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      {/* Top accent bar */}
      <div className="h-1 bg-red-600" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-red-600 font-heading text-lg font-bold text-white">
              UNC
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg leading-tight text-white">
                UNC NSTP
              </p>
              <p className="text-xs text-gray-400">
                National Service Training Program
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[220px] border border-gray-800 bg-black py-1 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-gray-900 hover:text-red-400"
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
            className="p-2 text-gray-300 hover:bg-gray-900 lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-gray-800 pb-4 lg:hidden">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-8 pr-3 text-sm text-gray-400 hover:bg-gray-900 hover:text-red-400"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

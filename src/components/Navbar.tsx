"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* Top accent bar */}
      <div className="h-1 bg-red-600" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={nstpLogo}
              alt="UNC NSTP Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-lg leading-tight text-gray-900">
                UNC NSTP
              </p>
              <p className="text-xs text-gray-500">
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
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[220px] border border-gray-200 bg-white py-1 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-red-600"
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
            className="p-2 text-gray-600 hover:bg-gray-50 lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-gray-200 pb-4 lg:hidden">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-8 pr-3 text-sm text-gray-500 hover:bg-gray-50 hover:text-red-600"
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

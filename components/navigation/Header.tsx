"use client";

import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Family Services",
    href: "/families",
    dropdown: [
      { label: "Au Pair Placement", href: "/families/au-pair" },
      { label: "Nanny Services", href: "/families/nanny" },
      { label: "NDIS Support", href: "/families/ndis" },
      { label: "Emergency Care", href: "/families/emergency" },
    ],
  },
  {
    label: "For Nannies",
    href: "/nannies",
    dropdown: [
      { label: "Job Opportunities", href: "/nannies/jobs" },
      { label: "Visa Support", href: "/nannies/visa" },
      { label: "Training Programs", href: "/nannies/training" },
      { label: "Rural Placements", href: "/nannies/rural" },
    ],
  },
  {
    label: "Register Now",
    href: "/register",
    dropdown: [
      { label: "Carer Registration Form", href: "/register/applicationform" },
      { label: "Family Registration Form", href: "/register/familyform" },
    ],
  },
  {
    label: "NDIS Services",
    href: "/ndis",
    dropdown: [
      { label: "Children with Neurodivergence", href: "/ndis/children" },
      { label: "Allied Health Professionals", href: "/ndis/professionals" },
      { label: "Telehealth Support", href: "/ndis/telehealth" },
      { label: "Compliance & Registration", href: "/ndis/compliance" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Header = (): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState<string | null>(null);

  return (
    <header className="relative w-full shadow-sm">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-3 sm:px-4 lg:px-6 xl:px-8 py-2 lg:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 z-50 relative">
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-[#568F87] rounded-full flex items-center justify-center shadow">
            <span className="text-white font-bold text-xs sm:text-sm lg:text-base">P</span>
          </div>
          <div className="font-bold text-[#103b49] text-xs sm:text-sm md:text-base lg:text-lg tracking-wide leading-tight font-['Poppins']">
            <span className="hidden sm:inline">Puzzle to Paddock</span>
            <span className="sm:hidden">
              puzzle to
              <br />
              paddock
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={item.href}
                      className="font-normal text-[#252641] text-xs xl:text-sm tracking-wide hover:text-[#064232] transition-colors font-['Poppins']"
                    >
                      {item.label}
                    </Link>
                    <ChevronDown
                      size={12}
                      className="text-[#252641] transition-colors group-hover:text-[#064232]"
                    />
                  </div>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-md border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-3 py-1.5 text-xs text-[#252641] hover:text-[#064232] hover:bg-gray-50 transition-colors font-['Poppins']"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="font-normal text-[#252641] text-xs xl:text-sm tracking-wide hover:text-[#064232] transition-colors font-['Poppins']"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-1 text-[#252641] hover:text-[#064232] transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col py-3">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-5 py-2 font-normal text-[#252641] text-sm hover:text-[#064232] hover:bg-white/50 transition-colors font-['Poppins'] text-left"
                      onClick={() =>
                        setActiveMobileDropdown(activeMobileDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeMobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeMobileDropdown === item.label && (
                      <div className="bg-white/60 backdrop-blur-sm border-t border-gray-200">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-8 py-2 text-xs text-[#252641] hover:text-[#064232] transition-colors font-['Poppins']"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveMobileDropdown(null);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-5 py-2 font-normal text-[#252641] text-sm hover:text-[#064232] hover:bg-white/50 transition-colors font-['Poppins']"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export { Header };

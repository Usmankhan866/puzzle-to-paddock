"use client"

import React from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

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
    label: "NDIS Services",
    href: "/ndis",
    dropdown: [
      { label: "Children with Neurodivergence", href: "/ndis/children" },
      { label: "Allied Health Professionals", href: "/ndis/professionals" },
      { label: "Telehealth Support", href: "/ndis/telehealth" },
      { label: "Compliance & Registration", href: "/ndis/compliance" },
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
  { label: "Register Now", href: "/register" },
  { label: "Contact", href: "/contact" },
]

const Header = (): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState<string | null>(null)

  return (
    <header className="relative w-full">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 z-50 relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-[#064232] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl">P</span>
          </div>
          <div className="font-bold text-[#103b49] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide leading-normal font-['Poppins']">
            <span className="hidden sm:inline">puzzle to paddock</span>
            <span className="sm:hidden">
              puzzle to
              <br />
              paddock
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="font-normal text-[#252641] text-sm xl:text-base tracking-wide leading-normal hover:text-[#064232] transition-colors font-['Poppins']"
                  >
                    {item.label}
                  </Link>
                  <ChevronDown size={14} className="text-[#252641] group-hover:text-[#064232] transition-colors" />

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-[#252641] hover:text-[#064232] hover:bg-gray-50 transition-colors font-['Poppins']"
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
                  className="font-normal text-[#252641] text-sm xl:text-base tracking-wide leading-normal hover:text-[#064232] transition-colors font-['Poppins']"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#252641] hover:text-[#064232] transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col py-4">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-6 py-3 font-normal text-[#252641] text-base hover:text-[#064232] hover:bg-white/50 transition-colors font-['Poppins'] text-left"
                      onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeMobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeMobileDropdown === item.label && (
                      <div className="bg-white/60 backdrop-blur-sm border-t border-gray-200">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-10 py-3 text-[#252641] hover:text-[#064232] transition-colors font-['Poppins'] text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setActiveMobileDropdown(null)
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
                    className="block px-6 py-3 font-normal text-[#252641] text-base hover:text-[#064232] hover:bg-white/50 transition-colors font-['Poppins']"
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
  )
}

export { Header }
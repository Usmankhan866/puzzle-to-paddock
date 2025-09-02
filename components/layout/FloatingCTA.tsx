"use client"

import type React from "react"
import { Button } from "../ui/button"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

export const FloatingCTA = (): React.JSX.Element => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:flex-row sm:gap-3">
      {/* WhatsApp Chat */}
      <Button
              className="bg-[#568f87] hover:bg-[#568f87]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"

        asChild
      >
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center"
        >
          <MessageCircle size={20} />
          <span className="hidden md:inline ml-2 font-['Poppins']">Whatsapp Chat</span>
        </a>
      </Button>

      {/* Book a Call */}
      <Button
        className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
        asChild
      >
        <Link href="/contact" aria-label="Book a call" className="flex items-center justify-center">
          <Calendar size={20} />
          <span className="hidden md:inline ml-2 font-['Poppins']">Book Call</span>
        </Link>
      </Button>

      {/* Click to Call */}
      <Button
        className="bg-[#F5BABB] hover:bg-[#25D366]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
        asChild
      >
        <a href="tel:+1234567890" aria-label="Call us" className="flex items-center justify-center">
          <Phone size={20} />
          <span className="hidden md:inline ml-2 font-['Poppins']">Call</span>
        </a>
      </Button>
    </div>
  )
}

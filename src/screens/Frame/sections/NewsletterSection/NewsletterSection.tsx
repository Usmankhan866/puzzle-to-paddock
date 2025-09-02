"use client"
import React from "react"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { text: "Careers", href: "#careers" },
  { text: "Privacy Policy", href: "#privacy" },
  { text: "Terms & Conditions", href: "#terms" },
]

const contactInfo = [
  { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, text: "hello@puzzletopaddock.com" },
  { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, text: "+61 400 000 000" },
  { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Melbourne, Australia" },
]

export const NewsletterSection = (): React.JSX.Element => {
  const [email, setEmail] = React.useState("")
  const [isSubscribed, setIsSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer id="contact" className="w-full bg-[#064232] relative">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-[74px]">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 sm:space-y-6 lg:space-y-0 lg:space-x-6 xl:space-x-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-[78px] xl:h-[78px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[#064232] font-bold text-base sm:text-lg lg:text-xl xl:text-2xl">P</span>
            </div>
            <div className="font-bold text-white text-lg sm:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] tracking-wide leading-normal font-['Poppins']">
              Puzzle to Paddock
            </div>
          </div>

          <div className="hidden lg:block w-px h-[60px] xl:h-[83px] bg-white/30" />

          <div className="font-semibold text-white text-base sm:text-lg lg:text-xl xl:text-[22px] tracking-wide leading-normal text-center font-['Poppins']">
            Connecting Families with Care
          </div>
        </div>

        {/* Newsletter section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h3 className="font-medium text-[#b2b3cf] text-lg sm:text-xl lg:text-2xl xl:text-[26px] text-center tracking-wide leading-normal mb-4 sm:mb-6 lg:mb-8 font-['Poppins']">
            Subscribe to get our Newsletter
          </h3>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 max-w-2xl mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 lg:w-80 xl:w-[400px] h-10 sm:h-12 lg:h-14 xl:h-[60px] rounded-full border border-[#83839a] bg-transparent text-white placeholder:text-[#82839a] font-normal text-base sm:text-lg lg:text-xl xl:text-xl text-center tracking-wide leading-normal font-['Poppins'] focus:border-white transition-colors"
              placeholder="Your Email"
              required
            />

            <Button
              type="submit"
              disabled={isSubscribed}
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 h-10 sm:h-12 lg:h-14 xl:h-[60px] rounded-full bg-gradient-to-r from-[#545ae7] to-[#393fcf] hover:opacity-90 font-medium text-white text-base sm:text-lg lg:text-xl xl:text-[22px] leading-normal transition-all duration-300 hover:scale-105 font-['Poppins'] disabled:opacity-50"
            >
              {isSubscribed ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 sm:gap-3 text-[#b2b3cf] hover:text-white transition-colors group"
            >
              <div className="group-hover:scale-110 transition-transform">{contact.icon}</div>
              <span className="font-normal text-sm sm:text-base lg:text-lg font-['Poppins']">{contact.text}</span>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12">
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                className="font-normal text-[#b2b3cf] text-base sm:text-lg lg:text-xl xl:text-[22px] text-center tracking-wide leading-normal hover:text-white transition-colors font-['Poppins']"
              >
                {link.text}
              </a>
              {index < footerLinks.length - 1 && <div className="hidden sm:block w-px h-3 sm:h-4 bg-[#b2b3cf]/30" />}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="font-normal text-[#b2b3cf] text-sm sm:text-base lg:text-lg xl:text-[22px] text-center tracking-wide leading-normal font-['Poppins']">
            © 2025 Puzzle to Paddock. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

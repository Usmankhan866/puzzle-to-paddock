"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const DiscussionSection = () => {
  const quickLinks = [
    {
      title: 'Call Us',
      icon: <Phone className="w-4 h-4" />,
      action: 'tel:1300979054',
      color: 'bg-[#568f87]',
      hoverColor: 'hover:bg-[#4a7a72]'
    },
    {
      title: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4" />,
      action: 'https://wa.me/61300979054',
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20b858]'
    }
  ];

  return (
    <section className="w-full relative py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4 order-2 lg:order-1">
            {/* Title with decorative element */}
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-[#f5babb] rounded-full absolute -left-1 sm:-left-1 lg:-left-2 xl:-left-2 -top-1 sm:-top-1 lg:-top-1 xl:-top-1" />
              <h2 className="relative z-10 pl-4 sm:pl-5 lg:pl-6 xl:pl-7 font-bold text-[#064232] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-['Poppins']">
                <span className="text-[#568f87]">Book a Call With </span>
                <span className="text-[#064232]">Puzzle to Paddock</span>
              </h2>
            </div>

            {/* Description */}
            <div className="pl-4 sm:pl-5 lg:pl-6 xl:pl-7">
              <p className="font-normal text-[#696983] text-xs sm:text-sm lg:text-base xl:text-lg tracking-wide leading-relaxed font-['Poppins']">
                Families and professionals can connect directly with our team. 
                Choose a time that suits you best and let's discuss how we can 
                support your needs.
                <br />
                <br />
                Whether you're seeking care or looking to join our network of 
                professionals, we're here to help you take the next step.
              </p>
            </div>

            {/* Booking buttons */}
            <div className="pl-4 sm:pl-5 lg:pl-6 xl:pl-7 space-y-2">
              <div className="flex flex-col gap-2">
                {/* Nanny Introduction Call */}
                <Button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/clo-puzzletopaddock/nanny-introduction-call?back=1&month=2025-09",
                      "_blank"
                    )
                  }
                  className="bg-[#568f87] hover:bg-[#4a7a72] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 font-['Poppins']"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Nanny Introduction Call
                </Button>

                {/* NDIS Carer or Family Consultation */}
                <Button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/clo-puzzletopaddock/ndis-carer-or-family?back=1&month=2025-09",
                      "_blank"
                    )
                  }
                  className="bg-[#F5BABB] hover:bg-[#f0a7a9] text-[#568f87] px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 font-['Poppins']"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  NDIS Carer or Family Consultation
                </Button>
              </div>
              
              {/* Quick contact */}
              <div className="flex gap-2 pt-2">
                <span className="text-xs text-[#696983] font-['Poppins'] self-center">Need immediate help?</span>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.action}
                    target={link.action.startsWith('http') ? '_blank' : undefined}
                    rel={link.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-1 ${link.color} ${link.hoverColor} text-white px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 hover:shadow-sm`}
                  >
                    {link.icon}
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image with decorative elements */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative elements */}
            <div className="absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 -top-1 sm:-top-2 lg:-top-2 xl:-top-3 -left-1 sm:-left-2 lg:-left-2 xl:-left-3 bg-[#568f87] rounded-2xl lg:rounded-[16px]" />
            <div className="absolute w-16 h-16 sm:w-18 sm:h-18 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -bottom-2 sm:-bottom-3 lg:-bottom-4 xl:-bottom-5 -right-2 sm:-right-3 lg:-right-4 xl:-right-5 bg-[#f5babb] rounded-2xl lg:rounded-[16px]" />
            <div className="absolute w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 xl:w-5 top-1/3 -left-1 sm:-left-1 lg:-left-2 xl:-left-2 bg-[#f5babb] rounded-full" />

            {/* Main image */}
            <div className="relative z-10">
              <img
                className="w-full h-auto max-w-full rounded-xl sm:rounded-2xl lg:rounded-[24px] object-cover shadow-lg"
                alt="Professional consultation meeting between family and healthcare provider"
                src="https://aaniie.com/wp-content/uploads/2024/11/Permanent-Nanny-Placements_-Finding-the-Perfect-Fit-for-Every-Family-768x529.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

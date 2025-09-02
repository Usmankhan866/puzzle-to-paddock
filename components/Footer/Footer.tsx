"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Call Us",
      content: "1300 979 054",
      link: "tel:1300979054"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email Us",
      content: "hello@puzzletopaddock.com.au",
      link: "mailto:hello@puzzletopaddock.com.au"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      content: "Sydney, NSW",
      link: null
    }
  ];

  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "For Families", href: "/families" },
    { title: "For Professionals", href: "/professionals" },
    { title: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-4 h-4" />,
      href: "https://facebook.com/puzzletopaddock",
      label: "Facebook"
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      href: "https://instagram.com/puzzletopaddock",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/company/puzzletopaddock",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-[#064232] text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">
              Puzzle to Paddock
            </h3>
            <p className="text-[#FFF5F2]/80 text-sm leading-relaxed mb-4 font-['Nunito_Sans']">
              Your trusted partner in finding the perfect childcare solution for Australian families.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-[#568f87] hover:bg-[#F5BABB] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Quick Links Combined */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 font-['Poppins']">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#568f87] rounded-md flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-[#FFF5F2]/80 text-sm hover:text-[#F5BABB] transition-colors duration-300 font-['Nunito_Sans']"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#FFF5F2]/80 text-sm font-['Nunito_Sans']">
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <h4 className="font-semibold text-white mb-3 font-['Poppins']">Quick Links</h4>
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#FFF5F2]/80 text-sm hover:text-[#F5BABB] transition-colors duration-300 font-['Nunito_Sans']"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-[#568f87]/20 rounded-xl p-4 border border-[#568f87]/30">
              <h4 className="font-semibold text-white mb-2 font-['Poppins']">Stay Connected</h4>
              <p className="text-[#FFF5F2]/80 text-sm mb-4 font-['Nunito_Sans']">
                Get childcare tips and updates delivered to your inbox.
              </p>
              
              {/* Email Input */}
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm focus:outline-none focus:border-[#F5BABB] transition-colors duration-300"
                />
                <button className="w-full bg-[#568f87] hover:bg-[#568f87] text-white py-2 rounded-lg font-medium text-sm transition-colors duration-300 font-['Poppins']">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick CTA Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href="/families"
                className="bg-[#568f87] hover:bg-[#4a7a72] text-white py-2 px-3 rounded-lg font-medium text-xs text-center transition-colors duration-300 font-['Poppins']"
              >
                For Families
              </a>
              <a
                href="/professionals"
                className="bg-[#568f87] hover:bg-[#568f87] text-white py-2 px-3 rounded-lg font-medium text-xs text-center transition-colors duration-300 font-['Poppins']"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Bottom Bar */}
      <div className="border-t border-[#568f87]/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <p className="text-[#FFF5F2]/80 text-sm font-['Nunito_Sans']">
                © {currentYear} Puzzle to Paddock
              </p>
              <Heart className="w-3 h-3 text-[#F5BABB] fill-current" />
            </div>

            {/* Simple Legal Links */}
            <div className="flex gap-4">
              <a href="/privacy" className="text-[#FFF5F2]/80 text-sm hover:text-[#F5BABB] transition-colors duration-300 font-['Nunito_Sans']">
                Privacy
              </a>
              <a href="/terms" className="text-[#FFF5F2]/80 text-sm hover:text-[#F5BABB] transition-colors duration-300 font-['Nunito_Sans']">
                Terms
              </a>
              <a href="/contact" className="text-[#FFF5F2]/80 text-sm hover:text-[#F5BABB] transition-colors duration-300 font-['Nunito_Sans']">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
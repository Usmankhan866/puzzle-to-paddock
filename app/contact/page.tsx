"use client"

import type React from "react"

import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer" // Uncomment when Footer component is created
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Phone, Mail, MessageCircle, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integration with Jotform/Airtable would happen here
    console.log("Contact form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+61234567890",
      actionText: "+61 2 3456 7890",
      color: "bg-[#064232]",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick chat for immediate help",
      action: "https://wa.me/61234567890",
      actionText: "Start Chat",
      color: "bg-[#25D366]",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us a detailed message",
      action: "mailto:hello@puzzletopaddock.com.au",
      actionText: "hello@puzzletopaddock.com.au",
      color: "bg-[#568f87]",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book a Call",
      description: "Schedule a consultation",
      action: "https://calendly.com/puzzletopaddock",
      actionText: "Schedule Now",
      color: "bg-[#f5babb]",
      textColor: "text-[#064232]",
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
              <span className="text-[#064232]">Get in</span>
              <span className="text-[#568f87]"> Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Ready to find the perfect care solution? We're here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4 font-['Poppins']">
                <span className="text-[#568f87]">Choose Your </span>
                <span className="text-[#064232]">Preferred Contact Method</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <div className={method.textColor || "text-white"}>{method.icon}</div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232]">{method.title}</h3>
                    <p className="text-[#696983] text-sm mb-4 font-['Poppins']">{method.description}</p>
                    <Button
                      className={`w-full ${method.color} hover:opacity-90 text-white rounded-full py-2 font-semibold font-['Poppins'] ${
                        method.textColor ? `${method.color} ${method.textColor} hover:opacity-80` : ""
                      }`}
                      asChild
                    >
                      <a
                        href={method.action}
                        target={method.action.startsWith("http") ? "_blank" : undefined}
                        rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.actionText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232] p-3"
                      >
                        <option value="">Select a subject</option>
                        <option value="family-services">Family Services Inquiry</option>
                        <option value="nanny-application">Nanny/Au Pair Application</option>
                        <option value="ndis-services">NDIS Services</option>
                        <option value="professional-registration">Professional Registration</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="support">Support Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        placeholder="Tell us about your needs, questions, or how we can help..."
                        className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 text-lg font-semibold font-['Poppins']"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#064232] rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg font-['Poppins'] text-[#064232]">Phone</h4>
                          <p className="text-[#696983] font-['Poppins']">+61 2 3456 7890</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">Mon-Fri 8AM-6PM AEST</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#568f87] rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg font-['Poppins'] text-[#064232]">Email</h4>
                          <p className="text-[#696983] font-['Poppins']">hello@puzzletopaddock.com.au</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">We respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#f5babb] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#064232]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg font-['Poppins'] text-[#064232]">Office</h4>
                          <p className="text-[#696983] font-['Poppins']">Sydney, NSW</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">Serving all of Australia</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg font-['Poppins'] text-[#064232]">WhatsApp</h4>
                          <p className="text-[#696983] font-['Poppins']">+61 2 3456 7890</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">Quick responses 9AM-5PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-2xl mb-4 font-['Poppins'] text-[#064232]">Office Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-['Poppins'] text-[#464646]">Monday - Friday</span>
                        <span className="font-['Poppins'] text-[#696983]">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-['Poppins'] text-[#464646]">Saturday</span>
                        <span className="font-['Poppins'] text-[#696983]">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-['Poppins'] text-[#464646]">Sunday</span>
                        <span className="font-['Poppins'] text-[#696983]">Emergency only</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#696983] mt-4 font-['Poppins']">
                      All times are Australian Eastern Standard Time (AEST)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-2xl lg:text-3xl mb-4 font-['Poppins']">
                <span className="text-[#568f87]">Frequently </span>
                <span className="text-[#064232]">Asked Questions</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">
                  How quickly can you find a match?
                </h3>
                <p className="text-[#696983] font-['Poppins']">
                  Most families are matched within 1-2 weeks, depending on specific requirements and location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">
                  Do you provide NDIS services?
                </h3>
                <p className="text-[#696983] font-['Poppins']">
                  Yes, we connect families with NDIS-registered allied health professionals and support workers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">What areas do you serve?</h3>
                <p className="text-[#696983] font-['Poppins']">
                  We serve all major cities and rural areas across Australia, with specialized rural placement programs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">
                  Is there a consultation fee?
                </h3>
                <p className="text-[#696983] font-['Poppins']">
                  Initial consultations are completely free. We only charge placement fees after successful matches.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* <Footer /> */}
        {/* Uncomment above when Footer component is created */}
        <Footer />
      </div>
      <FloatingCTA />
    </>
  )
}
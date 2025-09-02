"use client"

import type React from "react"

import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import Link from "next/link"
import { useState } from "react"
import { Users, Heart, Briefcase } from "lucide-react"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"

export default function RegisterPage() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    message: "",
  })

  const registrationTypes = [
    {
      id: "family",
      title: "Family Registration",
      description: "Looking for childcare, au pair, or NDIS support services",
      icon: <Users className="w-8 h-8" />,
      color: "bg-[#064232]",
    },
    {
      id: "nanny",
      title: "Nanny/Au Pair Registration",
      description: "Seeking placement opportunities with Australian families",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-[#568f87]",
    },
    {
      id: "professional",
      title: "Allied Health Professional",
      description: "NDIS registered or seeking registration for therapy services",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-[#f5babb]",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integration with Jotform/Airtable would happen here
    console.log("Form submitted:", { type: selectedType, ...formData })
    // Redirect to thank you page or show success message
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <Header />
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
              <span className="text-[#064232]">Join Our</span>
              <span className="text-[#568f87]"> Community</span>
            </h1>
            <p className="max-w-2xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Start your journey with Puzzle to Paddock. Whether you're a family seeking care or a professional looking
              for opportunities, we're here to help.
            </p>
          </div>
        </section>

        {/* Registration Type Selection */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4 font-['Poppins']">
                <span className="text-[#568f87]">Choose Your </span>
                <span className="text-[#064232]">Registration Type</span>
              </h2>
              <p className="text-[#696983] text-lg font-['Poppins']">
                Select the option that best describes your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {registrationTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl overflow-hidden ${
                    selectedType === type.id
                      ? "border-[#064232] shadow-lg scale-105"
                      : "border-gray-200 hover:border-[#568f87] hover:shadow-md"
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${
                        type.id === "professional" ? "bg-[#f5babb]" : type.color
                      } rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <div className={type.id === "professional" ? "text-[#064232]" : "text-white"}>{type.icon}</div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232]">{type.title}</h3>
                    <p className="text-[#696983] text-sm font-['Poppins']">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Registration Form */}
            {selectedType && (
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">
                    {registrationTypes.find((t) => t.id === selectedType)?.title} Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                        Location *
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State"
                        required
                        className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                      />
                    </div>

                    {selectedType === "nanny" && (
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Experience Level
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232] p-3"
                        >
                          <option value="">Select experience level</option>
                          <option value="beginner">Beginner (0-1 years)</option>
                          <option value="intermediate">Intermediate (2-5 years)</option>
                          <option value="experienced">Experienced (5+ years)</option>
                        </select>
                      </div>
                    )}

                    {selectedType === "professional" && (
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Professional Specialty
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232] p-3"
                        >
                          <option value="">Select your specialty</option>
                          <option value="speech-therapy">Speech Therapy</option>
                          <option value="occupational-therapy">Occupational Therapy</option>
                          <option value="physiotherapy">Physiotherapy</option>
                          <option value="psychology">Psychology</option>
                          <option value="behavior-support">Behavior Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                        Tell us more about your needs
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Share any specific requirements, preferences, or questions..."
                        className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 text-lg font-semibold font-['Poppins']"
                      >
                        Submit Registration
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full py-3 text-lg font-semibold font-['Poppins'] bg-transparent"
                        asChild
                      >
                        <Link href="/contact">Book a Call Instead</Link>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-8 font-['Poppins'] text-[#064232]">
              Need Help Getting Started?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                variant="outline"
                className="h-auto p-6 border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Book a Call</h3>
                    <p className="text-sm opacity-80">Speak with our team</p>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 border-[#568f87] text-[#568f87] hover:bg-[#568f87] hover:text-white rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp Chat</h3>
                    <p className="text-sm opacity-80">Quick questions</p>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 border-[#f5babb] text-[#064232] hover:bg-[#f5babb] hover:text-[#064232] rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/about">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Learn More</h3>
                    <p className="text-sm opacity-80">About our services</p>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <FloatingCTA />
    </>
  )
}

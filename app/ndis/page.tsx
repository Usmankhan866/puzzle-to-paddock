import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import Link from "next/link"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"

export default function NDISPage() {
  const ndisServices = [
    {
      title: "Children with Neurodivergence",
      description:
        "Specialized support services for children with autism, ADHD, and other neurodevelopmental conditions.",
      image:
        "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/ndis/children",
      services: ["Behavioral support", "Speech therapy", "Occupational therapy", "Social skills development"],
    },
    {
      title: "Allied Health Professionals",
      description: "Connect with qualified therapists and specialists registered with NDIS for comprehensive care.",
      image:
        "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/ndis/professionals",
      services: ["NDIS registered", "Qualified professionals", "Flexible scheduling", "Home visits available"],
    },
    {
      title: "Telehealth Support",
      description: "Remote therapy sessions and consultations for families in rural areas or with mobility challenges.",
      image:
        "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/ndis/telehealth",
      services: ["Remote sessions", "Flexible timing", "Rural accessibility", "Technology support"],
    },
    {
      title: "Compliance & Registration",
      description: "Full NDIS compliance support and registration assistance for service providers and families.",
      image:
        "https://images.pexels.com/photos/5063408/pexels-photo-5063408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/ndis/compliance",
      services: ["NDIS registration", "Compliance support", "Documentation help", "Audit preparation"],
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">NDIS Support</span>
                <span className="text-[#568f87]"> Services</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                Comprehensive NDIS services connecting families with qualified allied health professionals and
                specialized support for children with disabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href="/register">Get NDIS Support</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                  asChild
                >
                  <Link href="/contact">Book Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Our </span>
                <span className="text-[#064232]">NDIS Services</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Specialized support services designed to help children with disabilities reach their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {ndisServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-semibold text-white text-xl lg:text-2xl mb-2 font-['Poppins']">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#696983] text-base lg:text-lg leading-relaxed mb-4 font-['Poppins']">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.services.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-[#464646] text-sm lg:text-base font-['Poppins']"
                          >
                            <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 font-semibold font-['Poppins']"
                        asChild
                      >
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NDIS Categories Section */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">NDIS </span>
                <span className="text-[#064232]">Service Categories</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                We provide services across all NDIS categories to support your child's development and independence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Core Supports", description: "Daily living activities and assistance with personal care" },
                { title: "Capacity Building", description: "Therapy services to build skills and independence" },
                { title: "Capital Supports", description: "Equipment and home modifications for accessibility" },
                { title: "Early Childhood", description: "Specialized support for children under 7 years" },
                { title: "School Leaver", description: "Transition support for young adults entering adulthood" },
                { title: "Specialist Disability", description: "Complex support needs and behavioral interventions" },
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">{category.title}</h3>
                  <p className="text-[#696983] font-['Poppins']">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#064232] to-[#568f87] py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
              Ready to Access NDIS Support?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Connect with qualified NDIS providers and start your child's journey toward greater independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#064232] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/register">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#064232] rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/contact">Speak to Specialist</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingCTA />
    </>
  )
}

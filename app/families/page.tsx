import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import Link from "next/link"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"

export default function FamiliesPage() {
  const serviceCards = [
    {
      title: "Au Pair Placement",
      description: "Connect with experienced au pairs from around the world for live-in childcare and cultural exchange.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/families/au-pair",
      features: ["Live-in care", "Cultural exchange", "Flexible hours", "Visa support"],
    },
    {
      title: "Professional Nanny Services",
      description: "Qualified nannies providing dedicated childcare in your home with professional training and background checks.",
      image: "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/families/nanny",
      features: ["Background checked", "Professional training", "Flexible schedules", "Emergency backup"],
    },
    {
      title: "NDIS Support Services",
      description: "Specialized support for children with disabilities through qualified allied health professionals.",
      image: "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/families/ndis",
      features: ["NDIS registered", "Allied health professionals", "Telehealth options", "Personalized care plans"],
    },
    {
      title: "Emergency Care",
      description: "Last-minute childcare solutions when you need them most, available 24/7.",
      image: "https://images.pexels.com/photos/5063408/pexels-photo-5063408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/families/emergency",
      features: ["24/7 availability", "Vetted caregivers", "Same-day service"],
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
                <span className="text-[#064232]">Family Services</span>
                <span className="text-[#568f87]"> That Care</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                From au pairs to NDIS support, we connect your family with the right care providers who understand your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] w-full sm:w-auto"
                  asChild
                >
                  <Link href="/register">Get Started Today</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">Book Consultation</Link>
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
                <span className="text-[#064232]">Family Services</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Comprehensive childcare and support services tailored to your family's unique needs and schedule.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {serviceCards.map((service, index) => (
                <Card
                  key={index}
                  className="group flex flex-col hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
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
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-[#696983] text-base lg:text-lg leading-relaxed mb-4 font-['Poppins']">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-[#464646] text-sm lg:text-base font-['Poppins']"
                          >
                            <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 font-semibold font-['Poppins'] mt-auto"
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

        {/* Why Choose Us Section */}
       <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
        <span className="text-[#568f87]">Why </span>
        <span className="text-[#064232]">Choose Us?</span>
      </h2>
      <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
        We are committed to providing safe, reliable, and personalized care for your family's peace of mind.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#F5BABB] text-[#064232] mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Rigorous Vetting</h3>
        <p className="text-[#696983] font-['Poppins']">Every caregiver undergoes a comprehensive background check, reference verification, and in-person interviews.</p>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#F5BABB] text-[#064232] mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Personalized Matching</h3>
        <p className="text-[#696983] font-['Poppins']">We take the time to understand your family's needs to find the perfect caregiver match for you.</p>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#F5BABB] text-[#064232] mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Ongoing Support</h3>
        <p className="text-[#696983] font-['Poppins']">Our team is always here to provide support and guidance to both families and caregivers throughout the placement.</p>
      </div>
    </div>
  </div>
</section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                        <span className="text-[#064232]">Our Simple</span>
                        <span className="text-[#568f87]"> Process</span>
                    </h2>
                    <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                        Finding the right care for your family is easy with our streamlined process.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">1</div>
                        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Consultation</h3>
                        <p className="text-[#696983] font-['Poppins']">Tell us about your family's needs, schedule, and preferences in a free, no-obligation consultation.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">2</div>
                        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Receive Profiles</h3>
                        <p className="text-[#696983] font-['Poppins']">We hand-select and send you profiles of qualified caregivers who match your criteria for you to review.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">3</div>
                        <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Meet & Hire</h3>
                        <p className="text-[#696983] font-['Poppins']">Interview your favorite candidates. Once you find the perfect fit, we'll handle the paperwork and placement details.</p>
                    </div>
                </div>
            </div>
        </section>

        

        <Footer />
      </div>
      <FloatingCTA />
    </>
  )
}
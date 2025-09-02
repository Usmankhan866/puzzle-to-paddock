import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import Link from "next/link"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"
export default function NanniesPage() {
  const opportunityCards = [
    {
      title: "Job Opportunities",
      description:
        "Browse hundreds of family placements across Australia with competitive pay and flexible arrangements.",
      image:
        "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/nannies/jobs",
      benefits: ["Competitive rates", "Flexible schedules", "Professional development", "Ongoing support"],
    },
    {
      title: "Visa Support",
      description:
        "Complete assistance with visa applications, migration pathways, and legal requirements for international candidates.",
      image:
        "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/nannies/visa",
      benefits: ["Visa guidance", "Legal support", "Document assistance", "Migration pathways"],
    },
    {
      title: "Training Programs",
      description:
        "Professional development courses, certifications, and ongoing education to advance your childcare career.",
      image:
        "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/nannies/training",
      benefits: ["Certified courses", "Skill development", "Career advancement", "Industry recognition"],
    },
    {
      title: "Rural Placements",
      description:
        "Unique opportunities in rural Australia with additional benefits, cultural experiences, and community connections.",
      image:
        "https://images.pexels.com/photos/5063408/pexels-photo-5063408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      href: "/nannies/rural",
      benefits: ["Rural bonuses", "Cultural immersion", "Community support", "Adventure opportunities"],
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <Header />
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Start Your Career</span>
                <span className="text-[#568f87]"> in Australia</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                Join our network of professional nannies and au pairs. Find meaningful work with Australian families
                while building your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href="/register">Apply Now</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                  asChild
                >
                  <Link href="/nannies/jobs">Browse Jobs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Your </span>
                <span className="text-[#064232]">Opportunities</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Discover the benefits of working with Australian families through our comprehensive support network.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {opportunityCards.map((opportunity, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={opportunity.image || "/placeholder.svg"}
                        alt={opportunity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-semibold text-white text-xl lg:text-2xl mb-2 font-['Poppins']">
                          {opportunity.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#696983] text-base lg:text-lg leading-relaxed mb-4 font-['Poppins']">
                        {opportunity.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center text-[#464646] text-sm lg:text-base font-['Poppins']"
                          >
                            <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 font-semibold font-['Poppins']"
                        asChild
                      >
                        <Link href={opportunity.href}>Explore</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Why Choose </span>
                <span className="text-[#064232]">Puzzle to Paddock?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#064232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">Trusted Network</h3>
                <p className="text-[#696983] font-['Poppins']">
                  Join thousands of successful placements with verified Australian families.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#568f87] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">Full Support</h3>
                <p className="text-[#696983] font-['Poppins']">
                  From visa assistance to ongoing career support, we're with you every step.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f5babb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#064232] text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">Career Growth</h3>
                <p className="text-[#696983] font-['Poppins']">
                  Professional development opportunities and pathways to permanent residency.
                </p>
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

"use client"

import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { Search, MapPin, Clock, DollarSign, Users, Filter } from "lucide-react"

// Mock data - in real app this would come from Airtable
const jobListings = [
  {
    id: 1,
    title: "Live-in Au Pair - Sydney Family",
    location: "Sydney, NSW",
    type: "Au Pair",
    salary: "$300-400/week",
    duration: "12 months",
    family: "The Johnson Family",
    children: "2 children (ages 4, 7)",
    startDate: "March 2024",
    description:
      "Loving family in Sydney's Northern Beaches seeking an experienced au pair to care for two school-aged children.",
    requirements: [
      "Previous childcare experience",
      "Valid driver's license",
      "English proficiency",
      "Swimming ability",
    ],
    benefits: ["Private room & bathroom", "Car provided", "Gym membership", "Weekend flexibility"],
    urgent: false,
    featured: true,
  },
  {
    id: 2,
    title: "NDIS Support Worker - Melbourne",
    location: "Melbourne, VIC",
    type: "NDIS",
    salary: "$35-45/hour",
    duration: "Ongoing",
    family: "Special Needs Support",
    children: "1 child (age 8, autism)",
    startDate: "Immediate",
    description:
      "Seeking qualified support worker for child with autism. Experience with behavioral support preferred.",
    requirements: ["NDIS registration", "Disability support experience", "Behavioral training", "Police check"],
    benefits: ["Flexible hours", "Professional development", "Ongoing training", "Supportive team"],
    urgent: true,
    featured: false,
  },
  {
    id: 3,
    title: "Professional Nanny - Brisbane",
    location: "Brisbane, QLD",
    type: "Nanny",
    salary: "$25-30/hour",
    duration: "6 months",
    family: "The Chen Family",
    children: "3 children (ages 2, 5, 8)",
    startDate: "April 2024",
    description:
      "Professional family seeking experienced nanny for three children. Must be comfortable with busy household.",
    requirements: ["Childcare qualification", "First aid certificate", "References required", "Flexible schedule"],
    benefits: ["Competitive salary", "Paid holidays", "Health insurance", "Professional development"],
    urgent: false,
    featured: true,
  },
  {
    id: 4,
    title: "Rural Au Pair - Tamworth Farm",
    location: "Tamworth, NSW",
    type: "Au Pair",
    salary: "$350-450/week",
    duration: "18 months",
    family: "The Williams Family",
    children: "4 children (ages 3, 6, 9, 12)",
    startDate: "May 2024",
    description:
      "Farm family seeking adventurous au pair for rural experience. Great opportunity for cultural exchange.",
    requirements: ["Love of outdoors", "Adaptability", "Basic English", "Cultural exchange visa"],
    benefits: ["Rural bonus", "Farm experience", "Travel opportunities", "Close-knit community"],
    urgent: false,
    featured: false,
  },
  {
    id: 5,
    title: "Speech Therapist - Perth",
    location: "Perth, WA",
    type: "NDIS",
    salary: "$40-55/hour",
    duration: "Contract",
    family: "Allied Health Services",
    children: "Multiple clients",
    startDate: "March 2024",
    description: "NDIS registered speech therapist needed for pediatric clients. Telehealth and home visits available.",
    requirements: [
      "Speech therapy qualification",
      "NDIS registration",
      "Pediatric experience",
      "Telehealth capability",
    ],
    benefits: ["Flexible scheduling", "Professional autonomy", "Competitive rates", "Ongoing support"],
    urgent: true,
    featured: true,
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesType = !typeFilter || job.type === typeFilter

    return matchesSearch && matchesLocation && matchesType
  })

  const featuredJobs = filteredJobs.filter((job) => job.featured)
  const regularJobs = filteredJobs.filter((job) => !job.featured)

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Find Your Perfect</span>
                <span className="text-[#568f87]"> Opportunity</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                Discover amazing opportunities with Australian families. From au pair placements to NDIS support roles.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search jobs, families, or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowFilters(!showFilters)}
                      className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-lg font-['Poppins'] bg-transparent"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                    <Button className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-lg px-8 font-['Poppins']">
                      Search
                    </Button>
                  </div>
                </div>

                {showFilters && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Location
                        </label>
                        <Input
                          placeholder="Enter city or state..."
                          value={locationFilter}
                          onChange={(e) => setLocationFilter(e.target.value)}
                          className="rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#464646] mb-2 font-['Poppins']">
                          Job Type
                        </label>
                        <select
                          value={typeFilter}
                          onChange={(e) => setTypeFilter(e.target.value)}
                          className="w-full rounded-lg border-gray-300 focus:border-[#064232] focus:ring-[#064232] p-3"
                        >
                          <option value="">All Types</option>
                          <option value="Au Pair">Au Pair</option>
                          <option value="Nanny">Nanny</option>
                          <option value="NDIS">NDIS Support</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-semibold text-2xl lg:text-3xl font-['Poppins']">
                  <span className="text-[#568f87]">Featured </span>
                  <span className="text-[#064232]">Opportunities</span>
                </h2>
                <div className="text-sm text-[#696983] font-['Poppins']">{featuredJobs.length} featured jobs</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden relative"
                  >
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#f5babb] text-[#064232] px-3 py-1 rounded-full text-xs font-semibold font-['Poppins']">
                        FEATURED
                      </span>
                    </div>
                    {job.urgent && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-['Poppins']">
                          URGENT
                        </span>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232] group-hover:text-[#568f87] transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-[#696983] font-['Poppins']">{job.family}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#568f87]" />
                          <span className="text-[#464646] font-['Poppins']">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-[#568f87]" />
                          <span className="text-[#464646] font-['Poppins']">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#568f87]" />
                          <span className="text-[#464646] font-['Poppins']">{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#568f87]" />
                          <span className="text-[#464646] font-['Poppins']">{job.children}</span>
                        </div>
                      </div>

                      <p className="text-[#696983] text-sm mb-4 font-['Poppins'] line-clamp-2">{job.description}</p>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          className="flex-1 bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-2 font-semibold font-['Poppins']"
                          asChild
                        >
                          <Link href={`/jobs/${job.id}`}>View Details</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-[#568f87] text-[#568f87] hover:bg-[#568f87] hover:text-white rounded-full py-2 font-semibold font-['Poppins'] bg-transparent"
                          asChild
                        >
                          <Link href={`/jobs/${job.id}/apply`}>Quick Apply</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Jobs */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-semibold text-2xl lg:text-3xl font-['Poppins']">
                <span className="text-[#568f87]">All </span>
                <span className="text-[#064232]">Opportunities</span>
              </h2>
              <div className="text-sm text-[#696983] font-['Poppins']">{filteredJobs.length} jobs found</div>
            </div>

            <div className="space-y-4">
              {regularJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 rounded-2xl overflow-hidden bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg font-['Poppins'] text-[#064232] group-hover:text-[#568f87] transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold font-['Poppins'] ml-2">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-[#696983] font-['Poppins'] mb-3">{job.family}</p>

                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#568f87]" />
                            <span className="text-[#464646] font-['Poppins']">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-[#568f87]" />
                            <span className="text-[#464646] font-['Poppins']">{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#568f87]" />
                            <span className="text-[#464646] font-['Poppins']">{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-[#568f87]" />
                            <span className="text-[#464646] font-['Poppins']">{job.children}</span>
                          </div>
                        </div>

                        <p className="text-[#696983] text-sm font-['Poppins'] line-clamp-1">{job.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:w-48">
                        <Button
                          className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-2 font-semibold font-['Poppins']"
                          asChild
                        >
                          <Link href={`/jobs/${job.id}`}>View Details</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#568f87] text-[#568f87] hover:bg-[#568f87] hover:text-white rounded-full py-2 font-semibold font-['Poppins'] bg-transparent"
                          asChild
                        >
                          <Link href={`/jobs/${job.id}/apply`}>Quick Apply</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232]">No jobs found</h3>
                <p className="text-[#696983] font-['Poppins'] mb-4">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-6 py-2 font-semibold font-['Poppins']"
                  onClick={() => {
                    setSearchTerm("")
                    setLocationFilter("")
                    setTypeFilter("")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#064232] to-[#568f87] py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
              Don't See the Perfect Match?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register your profile and we'll notify you when new opportunities that match your preferences become
              available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#064232] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/register">Create Profile</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#064232] rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/contact">Get Job Alerts</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FloatingCTA />
    </>
  )
}

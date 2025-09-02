"use client"

import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { MapPin, Clock, DollarSign, Users, Calendar, CheckCircle, ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"

// Mock data - in real app this would come from Airtable
const jobDetails = {
  1: {
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
      "Loving family in Sydney's Northern Beaches seeking an experienced au pair to care for two school-aged children. We're looking for someone who can become part of our family and help create a nurturing environment for our kids.",
    requirements: [
      "Previous childcare experience (minimum 1 year)",
      "Valid driver's license",
      "English proficiency (intermediate level)",
      "Swimming ability preferred",
      "First aid certificate (or willing to obtain)",
      "Clean background check",
    ],
    benefits: [
      "Private room & bathroom",
      "Car provided for personal use",
      "Gym membership included",
      "Weekend flexibility",
      "2 weeks paid vacation",
      "Phone allowance",
    ],
    responsibilities: [
      "School pickup and drop-off",
      "Homework assistance",
      "Light meal preparation",
      "Children's laundry",
      "Organizing activities and playdates",
      "Occasional babysitting evenings",
    ],
    familyInfo: {
      parents: "Mark (Engineer) & Sarah (Teacher)",
      lifestyle: "Active family who loves outdoor activities, beach trips, and weekend adventures",
      home: "4-bedroom house with pool in Manly area",
      pets: "1 friendly Golden Retriever named Max",
    },
    urgent: false,
    featured: true,
  },
}

export default function JobDetailPage() {
  const params = useParams()
  const jobId = Number.parseInt(params.id as string)
  const job = jobDetails[jobId as keyof typeof jobDetails]

  if (!job) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#064232] mb-4 font-['Poppins']">Job Not Found</h1>
          <p className="text-[#696983] mb-6 font-['Poppins']">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Button
            asChild
            className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-6 py-3 font-['Poppins']"
          >
            <Link href="/jobs">Back to Jobs</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-8 lg:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Button
                variant="outline"
                className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/jobs">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </Link>
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {job.featured && (
                    <span className="bg-[#f5babb] text-[#064232] px-3 py-1 rounded-full text-sm font-semibold font-['Poppins']">
                      FEATURED
                    </span>
                  )}
                  {job.urgent && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold font-['Poppins']">
                      URGENT
                    </span>
                  )}
                </div>
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 font-['Poppins'] text-[#064232]">
                  {job.title}
                </h1>
                <p className="text-[#696983] text-lg font-['Poppins'] mb-4">{job.family}</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-3 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#568f87] text-[#568f87] hover:bg-[#568f87] hover:text-white rounded-full px-8 py-3 text-lg font-semibold font-['Poppins'] bg-transparent"
                  asChild
                >
                  <Link href="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl mb-4 font-['Poppins'] text-[#064232]">About This Position</h2>
                    <p className="text-[#696983] text-lg leading-relaxed font-['Poppins']">{job.description}</p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#568f87] mt-0.5 flex-shrink-0" />
                          <span className="text-[#464646] font-['Poppins']">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">Requirements</h2>
                    <ul className="space-y-3">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#568f87] mt-0.5 flex-shrink-0" />
                          <span className="text-[#464646] font-['Poppins']">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Family Information */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">About the Family</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">Parents</h3>
                        <p className="text-[#696983] font-['Poppins']">{job.familyInfo.parents}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">Lifestyle</h3>
                        <p className="text-[#696983] font-['Poppins']">{job.familyInfo.lifestyle}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">Home</h3>
                        <p className="text-[#696983] font-['Poppins']">{job.familyInfo.home}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 font-['Poppins'] text-[#064232]">Pets</h3>
                        <p className="text-[#696983] font-['Poppins']">{job.familyInfo.pets}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4 font-['Poppins'] text-[#064232]">Quick Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#568f87]" />
                        <div>
                          <p className="font-medium text-[#464646] font-['Poppins']">Start Date</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">{job.startDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#568f87]" />
                        <div>
                          <p className="font-medium text-[#464646] font-['Poppins']">Duration</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">{job.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-[#568f87]" />
                        <div>
                          <p className="font-medium text-[#464646] font-['Poppins']">Salary</p>
                          <p className="text-sm text-[#696983] font-['Poppins']">{job.salary}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4 font-['Poppins'] text-[#064232]">Benefits & Perks</h3>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#568f87] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#464646] font-['Poppins']">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Apply CTA */}
                <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#064232] to-[#568f87]">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-white">Ready to Apply?</h3>
                    <p className="text-white/90 text-sm mb-4 font-['Poppins']">
                      Don't miss out on this amazing opportunity!
                    </p>
                    <Button
                      className="w-full bg-white text-[#064232] hover:bg-gray-100 rounded-full py-3 font-semibold font-['Poppins']"
                      asChild
                    >
                      <Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FloatingCTA />
    </>
  )
}

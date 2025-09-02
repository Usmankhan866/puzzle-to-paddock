"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Mother of 2",
    location: "Sydney, NSW",
    rating: 5,
    text: "Puzzle to Paddock found us the perfect au pair. Emma has become part of our family and the kids absolutely love her. The matching process was thorough and professional.",
    image:
      "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Au Pair from Spain",
    location: "Melbourne, VIC",
    rating: 5,
    text: "My experience with the Thompson family has been incredible. Puzzle to Paddock supported me through the visa process and helped me find the perfect match. I've learned so much about Australian culture!",
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Dr. James Chen",
    role: "Speech Therapist",
    location: "Brisbane, QLD",
    rating: 5,
    text: "As an NDIS provider, working with Puzzle to Paddock has streamlined my client connections. Their platform makes it easy to find families who need specialized support for their children.",
    image:
      "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Lisa Williams",
    role: "Rural Family",
    location: "Tamworth, NSW",
    rating: 5,
    text: "Living on a farm, we thought it would be impossible to find the right au pair. Puzzle to Paddock understood our unique needs and found someone who loves the rural lifestyle as much as we do.",
    image:
      "https://images.pexels.com/photos/5063408/pexels-photo-5063408.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
]

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
            <span className="text-[#568f87]">What Our </span>
            <span className="text-[#064232]">Community Says</span>
          </h2>
          <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
            Real stories from families, nannies, and professionals who have found their perfect match through Puzzle to
            Paddock.
          </p>
        </div>

        <div className="relative">
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-[#464646] text-lg lg:text-xl leading-relaxed mb-6 font-['Poppins'] italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-xl text-[#064232] font-['Poppins']">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#568f87] font-['Poppins']">{testimonials[currentIndex].role}</p>
                    <p className="text-[#696983] text-sm font-['Poppins']">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#064232]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

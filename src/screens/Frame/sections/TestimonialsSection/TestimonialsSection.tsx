import { Star, Quote } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): React.JSX.Element => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "NDIS Parent, Melbourne",
      quote: "Puzzle to Paddock connected us with an amazing speech therapist who truly understands my son's needs.",
      rating: 5
    },
    {
      name: "Dr. James Chen",
      role: "Occupational Therapist, Sydney", 
      quote: "The platform makes it easy to connect with families who need my expertise. Highly recommended.",
      rating: 5
    },
    {
      name: "Emma K.",
      role: "NDIS Parent, Brisbane",
      quote: "Finding the right allied health professionals was overwhelming until we found Puzzle to Paddock.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="w-full py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-3 font-['Poppins']">
            <span className="text-[#568f87]">What Our Community </span>
            <span className="text-[#064232]">Says</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#696983] text-sm lg:text-base font-['Poppins']">
            Trusted by families and allied health professionals across Australia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <Quote className="w-6 h-6 text-[#568f87] mb-3 opacity-30" />
                
                <blockquote className="text-[#064232] text-sm leading-relaxed mb-4 font-['Poppins']">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div>
                  <div className="font-semibold text-[#064232] text-sm font-['Poppins']">
                    {testimonial.name}
                  </div>
                  <div className="text-[#696983] text-xs font-['Poppins']">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-[#064232] mb-3 font-['Poppins']">
            Ready to Get Started?
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-[#568f87] hover:bg-[#064232] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 font-['Poppins'] text-sm">
              Find Care Today
            </Button>
            <Button className="bg-white text-[#568f87] border-2 border-[#568f87] hover:bg-[#568f87] hover:text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 font-['Poppins'] text-sm">
              Join Our Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Users, Heart, Shield, Star, Award, Clock } from "lucide-react";
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer" 
import Link from "next/link"
const AboutPage = (): React.JSX.Element => {
  const stats = [
    { number: "500+", label: "Families Served", icon: <Users className="w-5 h-5" /> },
    { number: "150+", label: "Trusted Professionals", icon: <Award className="w-5 h-5" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Every family deserves personalized, empathetic support tailored to their unique needs and circumstances."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Safety",
      description: "Rigorous vetting processes and ongoing support ensure the highest standards of care and reliability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building lasting relationships between families and professionals based on mutual respect and understanding."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Former NDIS support coordinator with 15+ years experience in childcare and disability services."
    },
    {
      name: "Dr. James Chen",
      role: "Head of Clinical Services",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Pediatric occupational therapist specializing in neurodevelopmental support and family-centered care."
    },
    {
      name: "Emma Rodriguez",
      role: "Family Support Manager",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Experienced nanny and early childhood educator passionate about connecting families with quality care."
    }
  ];

  return (
    

    
    <div className="w-full">
      
              <Header />
      {/* Hero Section */}
     <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">About </span>
                <span className="text-[#568f87]"> Puzzle to Paddock</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                From au pairs to NDIS support, we connect your family with the right care providers who understand your
                unique needs.
              </p>
              
            </div>
          </div>
        </section>


      {/* Stats Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 bg-[#568f87] rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-[#064232] text-xl sm:text-2xl lg:text-3xl font-['Poppins'] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[#696983] text-sm lg:text-base font-['Poppins']">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 order-2 lg:order-1">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#f5babb] rounded-full absolute -left-2 -top-2" />
                <h2 className="relative z-10 pl-6 sm:pl-8 font-bold text-[#064232] text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight font-['Poppins']">
                  Our Story
                </h2>
              </div>
              
              <div className="pl-6 sm:pl-8">
                <p className="font-normal text-[#696983] text-sm lg:text-base xl:text-lg leading-relaxed font-['Poppins'] mb-4">
                  Founded in 2019 by a mother who struggled to find quality NDIS support for her own child, Puzzle to Paddock was born from personal experience and genuine need.
                </p>
                <p className="font-normal text-[#696983] text-sm lg:text-base xl:text-lg leading-relaxed font-['Poppins'] mb-4">
                  We recognized that finding the right care shouldn't be like solving a puzzle – it should be a clear path from your needs to the perfect solution. That's why we created a platform that connects families with carefully vetted professionals who truly understand the journey.
                </p>
                <Button
                  variant="link"
                  className="h-auto p-0 font-normal text-[#696983] text-sm lg:text-base underline hover:text-[#064232] transition-colors font-['Poppins']"
                >
                  Read our full story
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute w-12 h-12 lg:w-16 lg:h-16 -top-2 -left-2 bg-[#568f87] rounded-2xl" />
              <div className="absolute w-20 h-20 lg:w-24 lg:h-24 -bottom-3 -right-3 bg-[#f5babb] rounded-2xl" />
              <div className="absolute w-3 h-3 lg:w-4 lg:h-4 top-1/3 -left-1 bg-[#f5babb] rounded-full" />
              
              <div className="relative z-10">
                <img
                  className="w-full h-auto rounded-xl lg:rounded-2xl object-cover shadow-lg"
                  alt="Puzzle to Paddock team working together"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#568F87]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold text-[#064232] text-2xl sm:text-3xl lg:text-4xl mb-4 font-['Poppins']">
              Our <span className="text-[#568f87]">Values</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#696983] text-base lg:text-lg font-['Poppins']">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-[#568f87] rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-[#064232] text-lg sm:text-xl font-['Poppins'] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#696983] text-sm lg:text-base leading-relaxed font-['Poppins']">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-bold text-[#064232] text-2xl sm:text-3xl lg:text-4xl mb-4 font-['Poppins']">
              Meet Our <span className="text-[#568f87]">Team</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#696983] text-base lg:text-lg font-['Poppins']">
              Passionate professionals dedicated to supporting Australian families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[#064232] text-lg font-['Poppins'] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#568f87] text-sm font-['Poppins'] mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#696983] text-sm leading-relaxed font-['Poppins']">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#64948d] to-[#57827b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-4 font-['Poppins']">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-white/90 text-base lg:text-lg mb-6 sm:mb-8 font-['Poppins']">
            Join hundreds of families who have found their ideal care solutions through Puzzle to Paddock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#568f87] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 font-['Poppins']">
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-[#568f87] hover:bg-white hover:text-[#568f87] px-8 py-3 rounded-full font-semibold transition-all duration-300 font-['Poppins']"
            >
              Learn More
            </Button>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection"
import { DiscussionSection } from "./sections/DiscussionSection/DiscussionSection"
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection"
import { NewsletterSection } from "./sections/NewsletterSection/NewsletterSection"
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection"
import { Header } from "../../../components/navigation/Header"
import { Hero } from "@/components/Hero/Hero"
import { Footer } from "@/components/Footer/Footer"
import type { JSX } from "react"

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="w-full">
        <Header />
        <Hero/>
        
        {/* Main Content Sections with Consistent Spacing */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <AboutUsSection />
          <FeaturesSection />
          <TestimonialsSection />
          <DiscussionSection />
        </div>
        
        {/* Footer with top margin */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Frame
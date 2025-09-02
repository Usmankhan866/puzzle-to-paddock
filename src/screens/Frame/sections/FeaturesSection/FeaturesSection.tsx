import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): React.JSX.Element => {
  const featureCards = [
    {
      title: "FOR Families",
      buttonText: "Find Care Today",
      buttonVariant: "outline" as const,
      backgroundImage: "https://www.international-nanny.com/wp-content/uploads/2022/05/49-1024x674.jpg",
      overlayColor: "bg-[#F5BABB]",
      buttonBg: "border-white text-[#064232] bg-white/20 hover:bg-white hover:text-[#064232] font-semibold",
    },
    {
      title: "FOR Caregivers",
      buttonText: "Join Our Network",
      buttonVariant: "default" as const,
      backgroundImage: "https://www.dreamnannies.com.au/wp-content/uploads/2023/09/shop-new-1.jpg",
      overlayColor: "bg-[#F5BABB]",
      buttonBg: "bg-white text-[#064232] hover:bg-gray-100 border-0 font-semibold",
    },
  ];

  return (
    <section className="w-full relative py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-2 sm:mb-3 lg:mb-4 font-['Poppins']">
            <span className="text-[#568f87]">What is </span>
            <span className="text-[#064232]">Puzzle to Paddock?</span>
          </h2>

          <p className="max-w-2xl lg:max-w-3xl mx-auto font-normal text-[#696983] text-xs sm:text-sm lg:text-base xl:text-lg text-center leading-relaxed font-['Poppins']">
            Puzzle to Paddock is a platform that connects families with trusted allied health professionals and educators, providing comprehensive support services tailored to each family's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 rounded-xl sm:rounded-2xl lg:rounded-[20px] overflow-hidden border-0 relative group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0 h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl sm:rounded-2xl lg:rounded-[20px] transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                />
                <div
                  className={`absolute inset-0 ${card.overlayColor} rounded-xl sm:rounded-2xl lg:rounded-[20px] opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-3 sm:px-4 lg:px-6">
                  <h3 className="font-semibold text-white text-base sm:text-lg lg:text-xl xl:text-2xl leading-normal mb-4 sm:mb-5 lg:mb-6 font-['Poppins']">
                    {card.title}
                  </h3>

                  <Button
                    variant={card.buttonVariant}
                    className={`h-10 sm:h-11 lg:h-12 xl:h-14 px-4 sm:px-5 lg:px-6 xl:px-8 rounded-full lg:rounded-[40px] font-medium text-sm sm:text-base lg:text-lg xl:text-xl leading-normal transition-all duration-300 hover:scale-105 font-['Poppins'] ${card.buttonBg}`}
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
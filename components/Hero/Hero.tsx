import React from "react";

export const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slideIn {
          from { width: 0; }
          to { width: 8rem; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        /* Mobile height optimization */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 55vh;
            background-size: cover;
            background-position: center top;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            min-height: 50vh;
          }
        }
      `}</style>

      <section 
        className="hero-section relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 67, 50, 0.15), rgba(86, 143, 135, 0.3)), url('https://assets.caresies.io/articles/2061/conversions/JiWgcx5NRZ7ayo3fA2S3-webp-featured.webp')`,
          backgroundColor: "#568f87",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-rose-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[45vh] sm:min-h-[50vh] lg:min-h-[80vh]">
              
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                
                {/* Title Section */}
                <div className="relative">
                  <div className="absolute -left-3 sm:-left-6 -top-3 sm:-top-6 w-12 h-12 sm:w-16 sm:h-16 hidden sm:block">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl sm:rounded-3xl rotate-12 animate-pulse animate-float" />
                    <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl sm:rounded-2xl -rotate-12 animate-pulse animate-float" style={{animationDelay: '0.3s'}} />
                  </div>
                  
                  <div className="relative z-20">
                    <div className="inline-block w-full">
                      <span className="text-sm sm:text-base lg:text-sm font-semibold text-emerald-600 tracking-widest uppercase mb-3 sm:mb-4 block animate-fade-in-up">
                        Premium Au Pair Adventure
                      </span>
                      <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl leading-tight font-['Poppins'] mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent animate-fade-in-up block drop-shadow-lg" style={{animationDelay: '0.2s'}}>
                          Your Epic
                        </span>
                        <p className="bg-gradient-to-r from-[#568F87] to-[#064232] bg-clip-text text-transparent animate-fade-in-up block drop-shadow-lg" style={{animationDelay: '0.4s'}}>
                          Au Pair Adventure
                        </p>
                        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-[#F5BABB] bg-clip-text text-transparent animate-fade-in-up block mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl drop-shadow-lg" style={{animationDelay: '0.6s'}}>
                          Awaits You!
                        </span>
                      </h1>
                      <div className="mt-4 sm:mt-6 w-32 sm:w-40 h-2 sm:h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-[#568F87] rounded-full animate-slide-in mx-auto lg:mx-0" style={{animationDelay: '0.8s'}} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <div className="relative p-5 sm:p-6 lg:p-6 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                    <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="relative z-10 font-normal text-slate-700 text-lg sm:text-xl lg:text-xl leading-relaxed font-['Poppins']">
                      Discover the perfect au pair match for your family. From <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">cultural exchange</span> to <span className="font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">childcare excellence</span>, we connect families with extraordinary au pairs who become part of your story.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="relative p-6 sm:p-8 bg-white/25 backdrop-blur-md rounded-2xl sm:rounded-[3rem] border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="space-y-4 sm:space-y-6">
                    <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-[#568F87] rounded-full shadow-xl hover:shadow-emerald-300/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-400 font-['Poppins']">
                      <span className="flex items-center space-x-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Book 15min Quick Call</span>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-teal-700 transition-all duration-300 drop-shadow-lg">50+</div>
                    <div className="text-sm sm:text-base text-slate-600 font-medium font-['Poppins'] drop-shadow-sm">Countries</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#568F87] to-[#064232] bg-clip-text text-transparent group-hover:from-[#4a7a72] group-hover:to-[#053227] transition-all duration-300 drop-shadow-lg">800+</div>
                    <div className="text-sm sm:text-base text-slate-600 font-medium font-['Poppins'] drop-shadow-sm">Au Pairs</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-500 to-[#F5BABB] bg-clip-text text-transparent group-hover:from-rose-600 group-hover:to-[#f0a7a9] transition-all duration-300 drop-shadow-lg">98%</div>
                    <div className="text-sm sm:text-base text-slate-600 font-medium font-['Poppins'] drop-shadow-sm">Family Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Decorative Elements Only */}
              
            </div>

                {/* Trust Indicators - Moved to left content */}
                <div className="flex flex-row items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                  <div className="inline-flex flex-row items-center space-x-4 sm:space-x-6 p-4 sm:p-5 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 shadow-xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm sm:text-base font-medium text-slate-600 font-['Poppins'] whitespace-nowrap">NDIS Registered</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                      <span className="text-sm sm:text-base font-medium text-slate-600 font-['Poppins'] whitespace-nowrap">Fully Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                      <span className="text-sm sm:text-base font-medium text-slate-600 font-['Poppins'] whitespace-nowrap">Quality Assured</span>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};
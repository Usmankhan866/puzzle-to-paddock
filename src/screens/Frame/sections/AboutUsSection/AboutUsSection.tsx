    import React from "react";

    export const AboutUsSection = () => {
      return (
        <>
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideIn {
              from { width: 0; }
              to { width: 6rem; }
            }
            
            .animate-fade-in-up {
              animation: fadeInUp 0.6s ease-out forwards;
              opacity: 0;
            }
            
            .animate-slide-in {
              animation: slideIn 0.8s ease-out forwards;
            }
          `}</style>
          
          <section id="about" className="relative w-full py-12 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-[#568F87] rounded-full animate-bounce" style={{animationDelay: '0.3s'}} />
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#F5BABB] rounded-full animate-bounce" style={{animationDelay: '0.7s'}} />
            <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}} />

            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  
                  {/* Left Content - Now shows first on mobile, first on desktop */}
                  <div className="space-y-5 order-1">
                    {/* Enhanced Title Section */}
                    <div className="relative">
                      <div className="absolute -left-4 -top-4 w-12 h-12">
                        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl rotate-12 animate-pulse" />
                        <div className="absolute inset-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl -rotate-12 animate-pulse" style={{animationDelay: '0.3s'}} />
                      </div>
                      
                      <div className="relative z-20">
                        <div className="inline-block">
                          <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase mb-2 block animate-fade-in-up">
                            Discover Our Story
                          </span>
                          <h2 className="font-bold text-slate-800 text-2xl sm:text-3xl lg:text-4xl leading-tight font-['Poppins'] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            ABOUT US
                          </h2>
                          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-slide-in" style={{animationDelay: '0.4s'}} />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Description */}
                    <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      <div className="relative p-4 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full" />
                        <p className="font-normal text-slate-700 text-base leading-relaxed font-['Poppins']">
                          At <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Puzzle to Paddock</span>, we connect families with trusted allied health professionals and educators to deliver the right support, at the right time. Our mission is simple: make NDIS care easier for families while giving providers flexible, well-paid opportunities to focus on what matters most — helping children thrive.
                        </p>
                      </div>

                      <div className="relative p-4 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{animationDelay: '0.2s'}}>
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full" />
                        <p className="font-normal text-slate-700 text-base leading-relaxed font-['Poppins']">
                          Whether you're a parent seeking support or a professional wanting to make an impact, we're here to bridge the gap and create lasting outcomes.
                        </p>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                      <button className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-['Poppins'] overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        <span className="relative z-10 flex items-center space-x-2">
                          <span>Learn More About Our Mission</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Stats or Features */}
                    <div className="flex space-x-8 pt-2 animate-fade-in-up" style={{animationDelay: '1s'}}>
                      <div className="text-center group">
                        <div className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">500+</div>
                        <div className="text-sm text-slate-600 font-medium">Families Helped</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors">200+</div>
                        <div className="text-sm text-slate-600 font-medium">Professionals</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-2xl font-bold text-rose-500 group-hover:text-rose-600 transition-colors">98%</div>
                        <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Enhanced Image Section - Now shows second on mobile, second on desktop */}
                  <div className="relative order-2 group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl transform -rotate-12 group-hover:-rotate-45 group-hover:scale-110 transition-all duration-500" style={{transitionDelay: '100ms'}} />
                    <div className="absolute -bottom-6 -right-6 w-18 h-18 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full group-hover:scale-125 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500" style={{transitionDelay: '200ms'}} />
                    <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl transform rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500" style={{transitionDelay: '300ms'}} />

                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-3xl blur-xl transform scale-105 group-hover:scale-110 transition-all duration-500" />

                    {/* Main Image Container */}
                    <div className="relative z-10 p-3 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/20">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          className="w-full h-auto aspect-[4/3] object-cover transform group-hover:scale-110 transition-all duration-700 ease-out rounded-2xl"
                          alt="A compassionate professional helping a child with educational toys"
                          src="https://lady.co.uk/sites/default/files/styles/full_width_1160x652/public/Posters/istock-629353764.jpg?itok=wENlXgu4&c=69f3609e5a9f5a1d42722fb70f58fc70"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: '300ms'}}>
                        <span className="text-sm font-bold text-emerald-600">Trusted Care</span>
                      </div>
                    </div>

                    {/* Animated Dots */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}} />
                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    };
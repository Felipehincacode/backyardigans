'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrollSection, { 
  ParallaxText, 
  FadeIn, 
  StaggeredContainer, 
  StaggeredItem 
} from './components/ScrollSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  // Project images data
  const projectImages = [
    {
      src: '/445860580_1598669097372283_3153523088757967059_n.jpg',
      title: 'Modern Garden Oasis',
      category: 'Complete Renovation',
      location: 'Austin, TX',
      value: '$65,000',
      description: 'A contemporary garden transformation featuring clean lines, native plants, and sustainable irrigation systems that create a peaceful retreat in the heart of the city.'
    },
    {
      src: '/445285832_1889240578194619_5099271348342018501_n.jpg',
      title: 'Urban Retreat',
      category: 'Small Space Design',
      location: 'San Francisco, CA',
      value: '$38,000',
      description: 'Maximizing every square foot with vertical gardens, multi-functional spaces, and smart design solutions that turn a compact urban lot into a luxurious outdoor living area.'
    },
    {
      src: '/446099148_1000361161602215_941712444517805526_n.jpg',
      title: 'Family Entertainment Hub',
      category: 'Outdoor Living',
      location: 'Dallas, TX',
      value: '$85,000',
      description: 'The ultimate family gathering space featuring a custom fire pit, outdoor kitchen, and entertainment zones designed for creating lasting memories with loved ones.'
    },
    {
      src: '/445781935_396122790085768_3473243598816708884_n.jpg',
      title: 'Luxury Pool & Garden',
      category: 'High-End Design',
      location: 'Miami, FL',
      value: '$150,000',
      description: 'A stunning transformation featuring a custom pool, outdoor kitchen, and meticulously designed garden spaces that create the ultimate outdoor living experience.'
    },
    {
      src: '/446261064_1148067829723246_7362982735102618644_n.jpg',
      title: 'Sustainable Landscape',
      category: 'Eco-Friendly Design',
      location: 'Portland, OR',
      value: '$45,000',
      description: 'An environmentally conscious design using drought-resistant plants, rainwater harvesting, and organic materials to create a beautiful, sustainable landscape.'
    },
    {
      src: '/446346501_802714328473787_3835727718607343372_n.jpg',
      title: 'Seasonal Color Garden',
      category: 'Year-Round Beauty',
      location: 'Seattle, WA',
      value: '$42,000',
      description: 'A carefully curated garden that provides vibrant colors and visual interest throughout all four seasons, ensuring year-round beauty and enjoyment.'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-[#4CAF50]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DY</span>
              </div>
              <span className="font-bold text-xl text-white">Dream Yard Studio</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Experience', 'Technology', 'Gallery', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sections = document.querySelectorAll('section');
                    sections[index]?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#4CAF50] ${
                    currentSection === index ? 'text-[#4CAF50]' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <motion.button 
              className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#388E3C] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR JOURNEY
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Section 1: The Hook */}
      <ScrollSection 
        sectionIndex={0} 
        onSectionChange={handleSectionChange}
        className="relative overflow-hidden"
      >
        {/* Fixed Video Background */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) contrast(1.2)' }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ParallaxText className="text-white mb-8 animate-bloom">
              REIMAGINE YOUR OUTDOORS
            </ParallaxText>
            
            <FadeIn delay={0.8} className="mb-12">
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The future of landscape design isn't just a service. 
                <span className="text-[#4CAF50] font-semibold"> It's an experience.</span>
              </p>
            </FadeIn>

            <FadeIn delay={1.2}>
              <motion.button 
                className="bg-[#4CAF50] text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#388E3C] transition-all duration-300 shadow-2xl glow-effect"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                START YOUR JOURNEY
              </motion.button>
            </FadeIn>
          </motion.div>
        </div>
      </ScrollSection>

      {/* Section 2: Status Quo vs Vision */}
      <ScrollSection 
        sectionIndex={1} 
        onSectionChange={handleSectionChange}
        className="relative bg-gradient-to-br from-[#111111] to-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              THE OLD WAY IS BROKEN
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional landscape design is confusing, time-consuming, and full of guesswork
            </p>
          </FadeIn>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
                <h3 className="text-2xl font-bold text-gray-400 mb-6">The Old Way</h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✗</span>
                    Confusing 2D blueprints
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✗</span>
                    Endless appointments
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✗</span>
                    No clear vision
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-3">✗</span>
                    Surprise costs
                  </li>
                </ul>
              </div>
            </StaggeredItem>

            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/20">
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">The New Way</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#4CAF50] mr-3">✓</span>
                    Stunning 3D visualizations
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4CAF50] mr-3">✓</span>
                    Streamlined process
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4CAF50] mr-3">✓</span>
                    Crystal clear vision
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#4CAF50] mr-3">✓</span>
                    Transparent pricing
                  </li>
                </ul>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </ScrollSection>

      {/* Section 3: The Promise */}
      <ScrollSection 
        sectionIndex={2} 
        onSectionChange={handleSectionChange}
        className="bg-black/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              THIS IS THE NEW STANDARD
            </h2>
          </FadeIn>

          <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/20">
                <h3 className="text-3xl font-bold text-[#4CAF50] mb-6">
                  TECHNOLOGY MEETS ART
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We don't just design—we engineer. Our proprietary platform uses advanced tech 
                  to turn your space into a stunning, detailed masterpiece. This isn't just a 
                  rendering; it's a portal to your future.
                </p>
                <div className="mt-8 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/445860580_1598669097372283_3153523088757967059_n.jpg"
                    alt="3D Design Technology"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover opacity-80"
                  />
                </div>
              </div>
            </StaggeredItem>

            <StaggeredItem>
              <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/20">
                <h3 className="text-3xl font-bold text-[#4CAF50] mb-6">
                  DESIGNED TO DELIGHT
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We built this experience from the ground up, with a single purpose: to make 
                  your journey effortless and inspiring. Our UI/UX isn't just good, it's a 
                  benchmark for the industry.
                </p>
                <div className="mt-8 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/445285832_1889240578194619_5099271348342018501_n.jpg"
                    alt="User Experience Design"
                    width={200}
                    height={200}
                    className="rounded-lg object-cover opacity-80"
                  />
                </div>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </ScrollSection>

      {/* Section 4: Project Gallery */}
      <ScrollSection 
        sectionIndex={3} 
        onSectionChange={handleSectionChange}
        className="relative bg-gradient-to-br from-[#0A0A0A] to-[#111111]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              OUR PORTFOLIO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover stunning transformations that showcase our expertise in landscape design
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Featured Project Slider */}
            <FadeIn>
              <div className="relative group">
                <div className="aspect-[16/9] relative overflow-hidden rounded-3xl bg-black">
                  {/* Slider Container */}
                  <div className="relative w-full h-full">
                    {projectImages.map((project, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <Image
                          src={project.src}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Project Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                          <div className="max-w-4xl">
                            <motion.h3 
                              className="text-4xl md:text-6xl font-bold text-white mb-4"
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.8 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p 
                              className="text-xl text-gray-300 mb-6 max-w-2xl"
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                            >
                              {project.description || "A stunning transformation featuring custom design elements and meticulously crafted outdoor spaces that create the ultimate living experience."}
                            </motion.p>
                            <motion.div 
                              className="flex items-center gap-8 text-white"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.7, duration: 0.8 }}
                            >
                              <span className="text-2xl font-bold text-[#4CAF50]">{project.value}</span>
                              <span className="text-lg">{project.location}</span>
                              <span className="text-lg">{project.category}</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Navigation Dots */}
                    <div className="absolute bottom-8 right-8 flex space-x-3">
                      {projectImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? 'bg-[#4CAF50] scale-125' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Arrow Navigation */}
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Grid Projects */}
            <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projectImages.slice(0, 4).map((project, index) => (
                <StaggeredItem key={index}>
                  <motion.div 
                    className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-[#4CAF50]/10 hover:border-[#4CAF50]/30 transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-lg text-gray-300 mb-3">{project.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#4CAF50] font-bold text-xl">{project.value}</span>
                          <span className="text-gray-400">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </ScrollSection>

      {/* Section 5: Happy Clients */}
      <ScrollSection 
        sectionIndex={4} 
        onSectionChange={handleSectionChange}
        className="relative bg-gradient-to-br from-[#111111] to-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              HAPPY CLIENTS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about their transformations.
            </p>
          </FadeIn>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Sarah & Mike Johnson</h4>
                    <p className="text-gray-400">Austin, TX</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  "Dream Yard Studio transformed our neglected backyard into a stunning outdoor living space. The process was seamless, and the results exceeded our expectations."
                </p>
                <div className="flex items-center text-[#4CAF50] mb-4">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/446099148_1000361161602215_941712444517805526_n.jpg"
                    alt="Sarah & Mike's Project"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover opacity-80"
                  />
                </div>
              </div>
            </StaggeredItem>

            <StaggeredItem>
                              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Robert Chen</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  "Professional, creative, and detail-oriented. They took our small urban space and created a beautiful garden that feels twice as large."
                </p>
                <div className="flex items-center text-[#4CAF50] mb-4">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/446261064_1148067829723246_7362982735102618644_n.jpg"
                    alt="Robert's Project"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover opacity-80"
                  />
                </div>
              </div>
            </StaggeredItem>

            <StaggeredItem>
                              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#4CAF50]/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Maria Rodriguez</h4>
                    <p className="text-gray-400">Miami, FL</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  "The attention to detail is incredible. Our pool and garden area is now the envy of the neighborhood. Worth every penny!"
                </p>
                <div className="flex items-center text-[#4CAF50] mb-4">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
                </div>
                <div className="h-32 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/446346501_802714328473787_3835727718607343372_n.jpg"
                    alt="Maria's Project"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover opacity-80"
                  />
                </div>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </ScrollSection>

      {/* Section 6: Emotional Connection */}
      <ScrollSection 
        sectionIndex={5} 
        onSectionChange={handleSectionChange}
        className="relative bg-gradient-to-br from-[#0A0A0A] to-[#111111]"
      >
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              IT'S MORE THAN A YARD
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
              This isn't just about plants and patios. It's about the morning coffee you'll enjoy, 
              the conversations you'll have, and the memories you'll create. 
                              <span className="text-[#4CAF50] font-semibold"> This is about building your own personal sanctuary.</span>
            </p>
          </FadeIn>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#4CAF50]/10">
                <div className="h-32 mb-4 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/445860580_1598669097372283_3153523088757967059_n.jpg"
                    alt="Morning Coffee"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Morning Coffee</h3>
                <p className="text-gray-400">Start your day in your perfect outdoor space</p>
              </div>
            </StaggeredItem>
            
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#4CAF50]/10">
                <div className="h-32 mb-4 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/445285832_1889240578194619_5099271348342018501_n.jpg"
                    alt="Conversations"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Conversations</h3>
                <p className="text-gray-400">Create meaningful connections in beautiful surroundings</p>
              </div>
            </StaggeredItem>
            
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#4CAF50]/10">
                <div className="h-32 mb-4 bg-gradient-to-br from-[#4CAF50]/20 to-[#66BB6A]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/446493810_420114550889268_219760130958529355_n.jpg"
                    alt="Memories"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Memories</h3>
                <p className="text-gray-400">Build lasting memories in your personal sanctuary</p>
              </div>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </ScrollSection>

      {/* Section 7: Final CTA */}
      <ScrollSection 
        sectionIndex={6} 
        onSectionChange={handleSectionChange}
        className="bg-gradient-to-br from-[#4CAF50] to-[#388E3C]"
      >
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              ARE YOU READY TO BUILD YOUR FUTURE?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl text-white/90 mb-12">
              Don't settle for ordinary. Elevate your space. Elevate your life.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <motion.button 
              className="bg-white text-[#4CAF50] px-16 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE REVOLUTION
            </motion.button>
          </FadeIn>
        </div>
      </ScrollSection>

      {/* Footer */}
              <footer className="bg-black/80 backdrop-blur-sm text-white py-16 border-t border-[#4CAF50]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DY</span>
            </div>
                <span className="font-bold text-xl">Dream Yard Studio</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional landscape design and renovation services. 
                Transforming outdoor spaces across America with proven results.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Landscape Design</li>
                <li>Garden Installation</li>
                <li>Outdoor Living</li>
                <li>Maintenance Plans</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Process</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@dreamyardstudio.com</li>
                <li>(555) 123-4567</li>
                <li>123 Garden Street</li>
                <li>Landscape City, LC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#4CAF50]/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream Yard Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

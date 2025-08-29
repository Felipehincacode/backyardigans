'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
      title: 'Luxury Pool Paradise',
      category: 'Pool & Spa Design',
      location: 'Miami, FL',
      value: '$120,000',
      description: 'A stunning pool and spa complex with custom water features, tropical landscaping, and premium materials that create a resort-like experience in your own backyard.'
    },
    {
      src: '/446261064_1148067829723246_7362982735102618644_n.jpg',
      title: 'Contemporary Courtyard',
      category: 'Modern Design',
      location: 'Los Angeles, CA',
      value: '$55,000',
      description: 'A sleek, minimalist courtyard design featuring geometric patterns, drought-resistant plants, and modern lighting that transforms outdoor space into an architectural statement.'
    },
    {
      src: '/446346501_802714328473787_3835727718607343372_n.jpg',
      title: 'Rustic Farmhouse Garden',
      category: 'Traditional Design',
      location: 'Nashville, TN',
      value: '$75,000',
      description: 'A charming farmhouse-style garden with stone pathways, vintage elements, and cottage-style plantings that create a warm, welcoming atmosphere for family gatherings.'
    },
    {
      src: '/446493810_420114550889268_219760130958529355_n.jpg',
      title: 'Desert Oasis',
      category: 'Xeriscape Design',
      location: 'Phoenix, AZ',
      value: '$45,000',
      description: 'A water-wise landscape featuring native desert plants, rock gardens, and sustainable design elements that thrive in arid climates while creating a beautiful outdoor space.'
    },
    {
      src: '/Gemini_Generated_Image_bsmjyubsmjyubsmj.png',
      title: 'Zen Meditation Garden',
      category: 'Wellness Design',
      location: 'Portland, OR',
      value: '$35,000',
      description: 'A peaceful meditation garden with flowing water features, carefully placed stones, and calming plant selections that create a serene environment for relaxation and mindfulness.'
    },
    {
      src: '/Gemini_Generated_Image_j56hcpj56hcpj56h.png',
      title: 'Coastal Living Space',
      category: 'Beach House Design',
      location: 'San Diego, CA',
      value: '$95,000',
      description: 'A coastal-inspired outdoor living space with ocean views, salt-tolerant plants, and nautical design elements that capture the essence of beachfront living.'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
                              <div className="w-16 h-16 relative">
                  <Image
                    src="/logo_banner.jpeg"
                    alt="Dream Yard Studio Logo"
                    fill
                    className="object-contain"
                  />
              </div>
                              <span className="font-bold text-xl text-[#22C55E]">Dream Yard Studio</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Experience', 'Technology', 'Gallery', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sections = document.querySelectorAll('section');
                    sections[index]?.scrollIntoView({ behavior: 'smooth' });
                  }}
                                  className={`text-sm font-medium transition-all duration-300 hover:text-[#22C55E] ${
                  currentSection === index ? 'text-[#22C55E]' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <motion.button 
                              className="bg-[#22C55E] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#16A34A] transition-colors duration-300"
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
                The future of landscape design isn&apos;t just a service. 
                <span className="text-[#22C55E] font-semibold"> It&apos;s an experience.</span>
              </p>
            </FadeIn>

            <FadeIn delay={1.2}>
              <motion.button 
                className="bg-[#22C55E] text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#16A34A] transition-all duration-300 shadow-2xl glow-effect"
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
        className="relative min-h-screen bg-gradient-to-br from-[#111111] to-[#0A0A0A]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/oldvsnew.png"
            alt="Old vs New Way"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay with Animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Title with Fade In */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              THE OLD WAY IS BROKEN
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
              Traditional landscape design is confusing, time-consuming, and full of guesswork
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* The Old Way - Slides from Left */}
            <motion.div
              initial={{ opacity: 0, x: -200, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94], // Custom bounce
                delay: 0.3
              }}
              viewport={{ once: true }}
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 shadow-2xl shadow-red-500/20">
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
            </motion.div>

            {/* The New Way - Slides from Right */}
            <motion.div
              initial={{ opacity: 0, x: 200, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94], // Custom bounce
                delay: 0.5
              }}
              viewport={{ once: true }}
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-[#22C55E]/30 shadow-2xl shadow-[#22C55E]/30">
                <h3 className="text-2xl font-bold text-[#22C55E] mb-6">The New Way</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#22C55E] mr-3">✓</span>
                    Stunning 3D visualizations
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#22C55E] mr-3">✓</span>
                    Streamlined process
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#22C55E] mr-3">✓</span>
                    Crystal clear vision
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#22C55E] mr-3">✓</span>
                    Transparent pricing
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 3: The Promise - Full Viewport */}
      <ScrollSection 
        sectionIndex={2} 
        onSectionChange={handleSectionChange}
        className="bg-black/50 p-0"
      >
        <div className="w-full h-screen flex flex-col">
          <FadeIn className="text-center pt-16 pb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white">THIS IS THE NEW STANDARD</h2>
          </FadeIn>
          <div className="flex-1 grid grid-cols-2 gap-0">
            {/* Card 1: TECHNOLOGY MEETS ART */}
            <div className="group relative overflow-hidden border-r border-gray-800">
              <Image src="/diseñador.png" alt="3D Design" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end">
                <motion.div
                  className="bg-black/80 backdrop-blur-md"
                  initial={{ height: 0 }}
                  whileHover={{ height: "60%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="p-8 h-full flex flex-col justify-center text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-3xl font-bold text-white group-hover:text-[#22C55E] transition-colors">TECHNOLOGY MEETS ART</h3>
                      <p className="text-gray-300">We engineer your space into a stunning, detailed masterpiece. This isn&apos;t just a rendering; it&apos;s a portal to your future.</p>
                      <div className="inline-flex items-center space-x-3 pt-2 text-[#22C55E]">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        <span className="font-semibold">3D Design Technology</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Card 2: DESIGNED TO DELIGHT */}
            <div className="group relative overflow-hidden">
              <Image src="/customers.png" alt="Happy Customers" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end">
                <motion.div
                  className="bg-black/80 backdrop-blur-md"
                  initial={{ height: 0 }}
                  whileHover={{ height: "60%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="p-8 h-full flex flex-col justify-center text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-3xl font-bold text-white group-hover:text-[#22C55E] transition-colors">DESIGNED TO DELIGHT</h3>
                      <p className="text-gray-300">Our process is built around you. Effortless, inspiring, and transparent from start to finish. A new benchmark for the industry.</p>
                       <div className="inline-flex items-center space-x-3 pt-2 text-[#22C55E]">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="font-semibold">User Experience Design</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 4: Full Viewport Gallery */}
      <ScrollSection 
        sectionIndex={3} 
        onSectionChange={handleSectionChange}
        className="relative bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex flex-col justify-center">
          <div className="w-full h-[75vh] relative">
            {/* Main Image */}
            {projectImages.map((project, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
            ))}
            
            {/* Project Info - Bottom Right */}
            <div className="absolute bottom-8 right-8 w-full max-w-md">
              {projectImages.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 40
                  }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="absolute inset-0"
                >
                  <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-[#22C55E]/30 shadow-2xl shadow-[#22C55E]/10">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-3">{project.location} • {project.category}</p>
                    <p className="text-2xl font-bold text-[#22C55E] mb-3">{project.value}</p>
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8">
              <button
                onClick={() => setCurrentSlide(p => (p === 0 ? projectImages.length - 1 : p - 1))}
                className="w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8">
              <button
                onClick={() => setCurrentSlide(p => (p === projectImages.length - 1 ? 0 : p + 1))}
                className="w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
             {/* Dots */}
            <div className="absolute bottom-8 left-8 flex space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#22C55E] scale-125' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
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
                <div className="flex items-center text-[#4CAF50]">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
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
                <div className="flex items-center text-[#4CAF50]">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
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
                <div className="flex items-center text-[#4CAF50]">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 text-sm">5.0 Rating</span>
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
                              <span className="text-[#22C55E] font-semibold"> This is about building your own personal sanctuary.</span>
            </p>
          </FadeIn>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#22C55E]/10 h-full flex flex-col">
                <div className="h-40 mb-4 relative rounded-lg overflow-hidden">
                  <Image src="/morning_coffee.png" alt="Morning Coffee" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Morning Coffee</h3>
                <p className="text-gray-400">Start your day in your perfect outdoor space</p>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#22C55E]/10 h-full flex flex-col">
                <div className="h-40 mb-4 relative rounded-lg overflow-hidden">
                  <Image src="/conversations.png" alt="Conversations" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Conversations</h3>
                <p className="text-gray-400">Create meaningful connections in beautiful surroundings</p>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-xl p-6 border border-[#22C55E]/10 h-full flex flex-col">
                <div className="h-40 mb-4 relative rounded-lg overflow-hidden">
                  <Image src="/memories.png" alt="Memories" fill className="object-cover" />
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
        className="bg-gradient-to-br from-[#22C55E] to-[#16A34A]"
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
              className="bg-white text-[#22C55E] px-16 py-6 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE REVOLUTION
            </motion.button>
          </FadeIn>
        </div>
      </ScrollSection>

      {/* Footer */}
              <footer className="bg-black/80 backdrop-blur-sm text-white py-16 border-t border-[#22C55E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-lg flex items-center justify-center">
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
          
          <div className="border-t border-[#22C55E]/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream Yard Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationForm from "@/components/ConsultationForm";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner with Luxury Champagne Artwork & CTA */}
      <HeroSection />

      {/* 2. Key Stats & Credentials Banner */}
      <StatsBanner />

      {/* 3. Luxury Interior Services Grid */}
      <ServicesSection />

      {/* 4. Portfolio Showcase with Category Filter */}
      <PortfolioSection />

      {/* 5. Interactive Cost & Package Calculator */}
      <EstimateCalculator />

      {/* 6. Standardized 5-Step Process */}
      <ProcessSection />

      {/* 7. Client Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 8. Lead Consultation & Free 3D Sketch Form */}
      <ConsultationForm />

      {/* 9. Comprehensive SEO FAQ with Microdata */}
      <FaqSection />
    </>
  );
}

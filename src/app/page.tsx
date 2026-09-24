import React from "react";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import EstimateCalculator from "@/components/EstimateCalculator";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationForm from "@/components/ConsultationForm";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section with Dom Solution Branding & High-Impact Visuals */}
      <HeroSection />

      {/* 2. Key Developer Metrics Banner */}
      <StatsBanner />

      {/* 3. Core Web & Web App Development Services */}
      <ServicesSection />

      {/* 4. Portfolio Showcase with Filter */}
      <PortfolioSection />

      {/* 5. Interactive Cost & Timeline Calculator */}
      <EstimateCalculator />

      {/* 6. Standardized 5-Step Delivery Process */}
      <ProcessSection />

      {/* 7. Technical Blog & Industry Insights Section */}
      <BlogSection />

      {/* 8. Client Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 9. Lead Consultation & Free Architecture Brief Form */}
      <ConsultationForm />

      {/* 10. Comprehensive FAQ */}
      <FaqSection />
    </>
  );
}

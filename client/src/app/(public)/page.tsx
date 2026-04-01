"use client";

import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <>
        <Suspense
          fallback={
            <div className="w-full h-125 flex flex-col justify-center items-center">
              <Loader className="animate-spin" size={24} />
            </div>
          }
        >
          <HeroSection/>
          <ServicesSection />
          <AboutSection />
        </Suspense>
    </>
  );
}
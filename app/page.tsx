import AboutUs from "@/components/AboutUs";
import { SignupFormDemo } from "@/components/ContactForm";
import { CarouselSize } from "@/components/Crousal";
import Footer from "@/components/Footer";
import { BackgroundGradientContact } from "@/components/GradientImageContact";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import { VortexDemoSecond } from "@/components/VortexDemoSecond";
import React from "react";
export default function page() {
  return (
    <>
      <main id="home" className="section-container  container  px-3 lg:px-28 md:px-16 ">
        <HeroSection />
      </main>
      <main id="about"className="section-container text-orange-400 ">
        <AboutUs />
      </main>
      <main id="projects" className="section-container ">
        <Project />
      </main>

      <main
        id="skills"
        className="section-container  flex justify-center flex-col items-center gap-11"
      >
        <div>
          <h2 className="my-11 text-5xl text-center">Skills </h2>
          <hr className="w-[150px] border border-orange-200 my-7" />
        </div>
        <CarouselSize />
      </main>

      <main className="section-container "
        id="contact">
        <VortexDemoSecond />
      </main>
      <Footer />
    </>
  );
}

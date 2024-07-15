import React from "react";
import { Vortex } from "./ui/vortex";
import { SignupFormDemo } from "./ContactForm";
import Image from "next/image";
import { BackgroundGradientContact } from "./GradientImageContact";

export function VortexDemoSecond() {
  return (
    <div className="w-full px-2 lg:px-28 md:px-16 mx-auto rounded-md  h-auto overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center    py-4 w-full h-full  lg:px-28 sm:px-0 md-px-0"
      >
        <div className="">
          <h2 className="my-11 text-5xl text-center">Contact Me </h2>
          <hr className="w-[150px] border border-orange-200 my-7 m-auto" />
        </div>
        <div className="w-full lg:flex md:flex  lg:justify-between sm:justify-center gap-5 md:justify-between">
          <div className="md:hidden lg:block flex justify-center  w-full">
            <BackgroundGradientContact imgUri={"/images/myImg.png"} />
          </div>
          <div className="mt-7 lg:mt-0 ">
            <SignupFormDemo />
          </div>
        </div>
      </Vortex>
    </div>
  );
}

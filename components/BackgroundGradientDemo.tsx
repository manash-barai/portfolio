"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo({imgUri}:{imgUri:string}) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-auto p-4 sm:p-10 bg-white dark:bg-zinc-900  group hover:bg-orange-200 hover:scale-150 transition duration-100">
        <img
          src={imgUri}
          alt="jordans"
          
          className="object-contain w-10 h-10  grayscale transition duration-100 group-hover:grayscale-0 transform group-hover:scale-100"
        />
        
      </BackgroundGradient>
    </div>
  );
}

"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientContact({imgUri}:{imgUri:string}) {
  return (
    <div className="w-96 overflow-hidden rounded-2xl items-center flex justify-center mt-24 ">
      <BackgroundGradient className="rounded-[22px]  w-96 p-4 sm:p-10 bg-white dark:bg-zinc-900  group ">
        <img
          src={imgUri}
          alt="jordans"
          
         className=" w-full "
        />
        
      </BackgroundGradient>
    </div>
  );
}

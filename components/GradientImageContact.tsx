"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientContact({imgUri}:{imgUri:string}) {
  return (
    <div className="w-full z-30 overflow-hidden rounded-full items-center flex justify-center mt-24 ">
      <BackgroundGradient className="rounded-full  w-96 p-4 sm:p-10 bg-white dark:bg-zinc-900  group ">
        <Image
          src={imgUri}
          alt="jordans"
          width={250}
          height={250}
         className=" w-full rounded-full"
        />
        
      </BackgroundGradient>
    </div>
  );
}
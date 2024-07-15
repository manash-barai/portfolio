import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import Image from "next/image"
import { BackgroundBeams } from "./ui/background-beams"
import { BackgroundGradientDemo } from "./BackgroundGradientDemo"

const skillAarray:string[]=["/images/react.png","/images/nextjs-icon.png","/images/node-js-icon.png","/images/typescript-programming-language-icon.png","/images/javascript-programming-language-icon.png","/images/express-js-icon.png","/images/mongodb-icon.png","/images/tailwind-css-icon.png","/images/bootstrap-5-logo-icon.png","/images/acertinity.png","/images/shadcn.png","/images/icons8-css-48.png","/images/icons8-html-48.png"]

export function CarouselSize() {
  return (
  <div className="flex gap-11 container px-2 lg:px-28  flex-wrap justify-center">

        {skillAarray.map((item:string, index:number) => (
        
          <BackgroundGradientDemo imgUri={item} key={index}   />
        
          
        ))}
        </div>
    
  )
}

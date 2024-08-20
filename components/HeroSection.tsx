"use client";

import React from "react";

import { ButtonsCard } from "./ui/tailwindcss-buttons";

import Image from "next/image";
import Link from "next/link";
import { GlobeDemo } from "./ui/GridGlove";
import { FlipWords } from "./ui/flip-words";

const HeroSection = () => {

  interface SocialLink{
    id?:number
    link:string;
    img:string
  }
  const mySocialLink:SocialLink[]=[
    {
      id:1,
      link:"https://www.linkedin.com/in/manash-barai-077606209/",
      img:"/images/linkedin.png"
    },
    {
      link:"https://github.com/manash-barai",
      img:"/images/code.png"
    },
   
    {
      link:"https://wa.me/7980689304",
      img:"/images/wp.png"
    },

  ]



  return (
    <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-20 ">
      <div className="text-7xl    flex justify-center items-start flex-col text-left">
        <div className="">
          <h1>Hi,</h1>
          <h1 className="my-0 lg:my-5">
            I am <span className=" text-orange-400">Manash </span>{" "}
          </h1>
          <div className="text-2xl">
            A <span className=" text-orange-400">FullStack</span> Web Developer{" "}
            <FlipWords words={["Mern", "Next.js"]} />
          </div>

          <div>
            <ButtonsCard>
              <button className={`relative inline-flex h-12 overflow-hidden  rounded-full transition-all duration-300 hover:scale-125  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                  <Link
                    href={
                      "https://www.linkedin.com/pulse/civil-coding-edureify-zkhof/"
                    }
                    target="__blank"
                    className=" tracking-widest text-center h-full flex items-center w-full	"
                  >
                    About My Coding Journey
                  </Link>
                </span>
              </button>
            </ButtonsCard>
          </div>
          <div className="flex gap-4 mt-7 items-center z-50 ">
            {mySocialLink.map((social:SocialLink,index:number)=>(
              <div key={index}>

              
              <ButtonsCard >
              <button className={`relative transition-all duration-300 hover:scale-125  inline-flex h-12 overflow-hidden ${ social.id===1?'rounded-xl':'rounded-full'} p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center ${ social.id===1?'rounded-xl':'rounded-full'} bg-slate-950 px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl `}>
                  <Link
                    href={social.link}
                    target="__blank"
                    className=" tracking-widest text-center h-full flex items-center w-full	"
                  >
                    <Image
                      src={social.img}
                      width={40}
                      height={20}
                      className="transition-all duration-300 hover:scale-125" 
                      alt=""
                    />{" "}
                  </Link>
                </span>
              </button>
            </ButtonsCard>
            </div>
            ))}

            
            
           
            
            
          </div>
        </div>
      </div>

      <div className="z-50 overflow-hidden relative rounded-3xl">
        <div className="">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

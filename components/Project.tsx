"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { ThreeDCardDemo } from "./CradProject";
import Image from "next/image";
import crmImg from "../public/images/crm-flow.png";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { SparklesCore } from "./ui/sparkles";

import Link from "next/link";
interface IProject {
  title: string;
  link: string;
  projectName: string;
  littleDescription: string;
  imgUrl: string;
  signUp:string
}

// Initialize an array of IProject objects
const projects: IProject[] = [
  {
    title: "www.tap2hires.com",
    link: "http://tap2hires.com/",
    signUp:"http://tap2hires.com/seekerSignUp",
    imgUrl: "/images/tap2hire.png",
    projectName: "Tap2Hires",
    littleDescription:
      "Creating a user-friendly job portal with a resume builder involves several components and functionalities",
  },
  {
    title: "www.forms.edureify.com",
    link: "https://forms.edureify.com/",
    signUp:"https://forms.edureify.com/signUp",
    projectName: "Easy Form",
    imgUrl: "/images/easyForm.png",
    littleDescription:
      "Creating a simple form generation system to collect data with dynamic fields involves designing a flexible ",
  },
  {
    title: "www.crm.edureify.com/login",
    link: "https://testcrm.edureify.com/",
    projectName: "Finreify Crm",
    imgUrl: "/images/FinreifyCrm.png",
    signUp:"https://testcrm.edureify.com/requestDemo",

    littleDescription:
      "3-layer Customer Relationship Management (CRM) system involves structuring the application into three main layers",
  },
];

export default function Project() {
  return (
    <div className="container lg:px-28">
      <div className="my-0">
        <div className="text-center text-5xl ">
          {" "}
          My Projects{" "}
          <FlipWords
            words={["Tap2Hire", "Finreify Crm", "Eassy Form", "Edureify Crm"]}
          />{" "}
        </div>
        <p className="text-center text-xl mt-4">
          Build Project With Awesome Experience{" "}
        </p>
        <hr className="m-auto mt-7 bottom-1 border-orange-400 w-[150px]" />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 sm:grid-cols-1 xs:grid-cols-1  h-auto mb-20 mt-10">
        {projects.map((project: IProject, index: number) => {
          return (
            <ThreeDCardDemo
              key={index}
              title={project.title}
              link={project.link}
              projectName={project.projectName}
              littleDescription={project.littleDescription}
              imgUrl={project.imgUrl}
              signUp={project.signUp}
            />
          );
        })}
      </div>

      <div className="h-[auto] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div>
          <h1 className="text-5xl text-center mt-11">
            Finreify Tenant Crm Project
          </h1>
          <hr className="m-auto mt-7 bottom-1 border-orange-400 w-[150px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 items-center justify-between my-16">
            <div className="flex-1">
              <h2 className="text-3xl  leading-relaxed">
                Finreify <span className="text-orange-400">Crm</span> <br />{" "}
                Project For <span className="text-orange-400">Multi</span> Tenant
              </h2>
              <div className="flex flex-col gap-3 my-11">
                2. CRM for Subscription Sales o Description: A dynamic CRM
                platform for managing multiple tenants, each with its own admins
                and users. Tenants can customize status names and colors, upload
                Excel files with configurable mandatory fields, and modify the
                interface, including logos. o Key Features:
                <p>
                  {" "}
                  Multi-tenant architecture with customizable statuses and
                  fields.
                </p>
                <p> Excel upload with dynamic field configurations.</p>
                
              </div>
              <ButtonsCard>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Link href={"https://testcrm.edureify.com/"} target="__blank" className=" tracking-widest	">
                      Explore Crm
                    </Link>
                  </span>
                </button>
              </ButtonsCard>
            </div>
            <div className="flex-1 flex-end ">
              <Image className="float-end" width={500} src={crmImg} alt="crm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

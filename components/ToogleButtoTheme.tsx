"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    
     
        <Button  className="bg-transparent hover:bg-transparent" >
          <Sun  onClick={() => setTheme("dark")} className=" rotate-0 text-slate-500  transition-all dark:-rotate-90 dark:scale-0" />
          <Moon  onClick={() => setTheme("light")} className="absolute text-white h-[1.2rem] w-[1.2rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
     
      
   
  )
}

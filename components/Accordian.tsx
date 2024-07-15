import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> 
            <div className="flex gap-2 item-end">

            <Image className="rounded-7xl" src={"/images/finreifySubcription.jpg"} width={100} height={100} alt="finreify-crm" />  
            <Image src={"/images/finreifyCrm2.jpg"} width={100} height={100} alt="finreify-crm" /> 
            <div className="ml-5">
                
            <h1 className="text-2xl text-start"> Open to Know This Crm User Flow</h1>
            <p className="text-start text-sm mt-4">Tenent CRM is a software system designed to manage customer relationships and interactions with full dynamic like status, calling status </p>
                </div> 
            </div>
             </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
    )
  }
  
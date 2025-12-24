// use public asset for site logo
import Link from "next/link";
import MailIcon from "./MailIcon";
import GlobeIcon from "../GlobeIcon";
import NavigationSection from "../Navigation/NavigationSection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import DashboardIcon from "../DashboardIcon";


export default function GlobalHeader() {
  let navigation = [
    "Ghostwriting",
    "Editing",
    "Publishing",
    "Marketing",
    "Audiobook",
    "About Us",
    "Contact Us",
  ]

  return (
    <section>
      <div className="pt-3">
        <div className='container'>
          <div className="flex flex-row items-center justify-between">
            <div className="logosection ">
              <img src="/assets/images/Collingwood-Site-Logo.png" alt="Collingwood Site Logo" className="w-[220px] md:w-[320px] h-auto object-contain" style={{width: '220px'}} />
            </div>
            <div className="interactionsection ">
              <div className="icons hidden md:block">
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-2">
                    <div className="w-6.25 h-6.25">
                      <MailIcon color="black" className=" w-5 h-5 lg:w-6.25 lg:h-6.25" />
                    </div>
                    <Link className="font-semibold md:text-[13px] lg:text-[16px]" href="mailto:info@franklinpublishers.com"> info@franklinpublishers.com</Link>
                  </div>

                  <div className="flex flex-row gap-2">
                    <div className="w-6.25 h-6.25">
                      <GlobeIcon color="black" className=" w-5 h-5 lg:w-6.25 lg:h-6.25" />
                    </div>
                    <Link className="font-semibold md:text-[13px] lg:text-[16px]" href="tel:+1 (844) 915-2665"> +1 (844) 915-2665</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-1 md:hidden">
                <div className='block md:hidden border-2 border-black items-center p-1 sm:p-3  rounded-sm md:rounded-xl text-center bg-[#EB6358] hover:bg-[#1f2a44] hover:scale-95 transition-all duration-500'>
                  <p className='text-white text-[12px] md:text-[12px] lg:text-[14px] xl:text-[17px] font-semibold'>Submit Your Manuscript</p>
                </div>
                <div className='lg:block border-2 border-black p-1 sm:p-1.28 rounded-sm md:rounded-xl group hover:bg-[#1f2a44] hover:scale-95 transition-all duration-500 '>
                  <div className="flex flex-col items-center justify-center">
                    <Sheet>
                      <SheetTrigger> <DashboardIcon className="w-5 h-5 sm:w-7 sm:h-7 text-black sm:pt-1" /></SheetTrigger>
                      <SheetContent >
                        <SheetHeader>
                          <SheetTitle>
                                <div className="logosection ">
                                  <img src="/assets/images/Collingwood-Site-Logo.png" alt="Collingwood Site Logo" className="w-[220px] md:w-[320px] h-auto object-contain" style={{width: '220px'}} />
                                </div>
                          </SheetTitle>
                         
                            <div className="mt-4">
                              <div className='border-2 border-black p-3.75 rounded-xl flex flex-col gap-2'>
                                {
                                  navigation.map((keys, index) => (
                                    <Link href="#" key={index} className='font-semibold text-black text-[16px] hover:text-primary hover:scale-105 transition-all duration-700'>{keys} </Link>
                                  ))
                                }
                              </div>
                            </div>
                          
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-8 hidden md:block">
            <NavigationSection />
          </div>
        </div>
      </div>

    </section>


  )
}

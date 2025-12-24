"use client"
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import logoOne from 'media/images/Carousel/logo_one.png';
import logoTwo from 'media/images/Carousel/logo_two.png';
import logoThree from 'media/images/Carousel/logo_three.png';
import logoFour from 'media/images/Carousel/logo_four.png';
import logoFive from 'media/images/Carousel/logo_five.png';
import logoSix from 'media/images/Carousel/logo_six.png';
import logoSeven from 'media/images/Carousel/logo_seven.png';
import Image from "next/image";

export default function LogoSliderBlock() {
    return (
        <div>
            <div className='border-2 border-black rounded-sm md:px-5 lg:px-10 md:py-5 lg:py-10 bg-[#EB6358]'>

                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoOne} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoTwo} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoThree} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoFour} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoFive} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoSix} /> </CarouselItem>
                        <CarouselItem className="basis-1/4"><Image alt="Coolingwood Press" src={logoSeven} /> </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

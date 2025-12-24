import Link from "next/link";
import CtaButton from "../ButtonCTA/CtaButton";
import DividerIcon from "../DividerIcon";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function HeroSection({ padding = "pt-80" }) {
    return (
        <section>
            <div className={`${padding} -mt-60 pb-20 sm:pb-32 md:pb-40 bg-gray-100`}>
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                        <div className="order-1">
                            <h2 className="text-[40px] sm:text-[55px] md:text-[45px] lg:text-[60px] xl:text-[76px] text-black font-bold leading-tight sm:leading-12.75 md:leading-11.25 lg:leading-15 xl:leading-19">
                                Get Published, <br /> Seen & Heard.
                            </h2>
                            <DividerIcon className="w-full h-4 text-black mt-4" />
                            <div className="mt-4">
                                <p className="font-semibold text-[16px] sm:text-[18px] md:text-[14px] lg:text-[16px] xl:text-[19px] leading-relaxed">
                                    Go beyond writing, become a published author with a global audience. Hassle-free publishing with a dedicated literary agent is now easier than ever!
                                </p>
                            </div>
                            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-2">
                                <CtaButton className="bg-[#1f2a44] text-white hover:text-white hover:bg-[#EB6358]" />
                                <CtaButton content="Connect with  Agent" className="bg-[#EB6358] text-white hover:text-white hover:bg-[#1f2a44]" />
                            </div>
                        </div>
                        <div className="order-2 md:ml-0 lg:ml-14">
                            <div className="border-2 border-black rounded-sm overflow-hidden relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
                                {/* Library Background Image */}
                                <img 
                                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop" 
                                    alt="Library bookshelf" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {/* Optional overlay for better text readability if needed later */}
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 -mt-16 sm:-mt-20 md:-mt-24">
                 <LogoSliderBlock />
            </div>
        </section>
    )
}

import Link from 'next/link'
import React from 'react'

export default function CtaButton({content = "Submit Your Menuscript" , link = "#" , className="bg-[#EB6358] text-white hover:text-white"}) {
  return (
    <div className={`${className} px-4 w-fit py-2 rounded-sm border-2 border-black hover:scale-95 transition-all duration-300`}>
        <Link href={link} className='font-semibold text-[14px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>{content}</Link>
    </div>
  )
}

import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="relative">
        <div className="py-5 px-8 md:py-24 md:px-0 container relative">
            <div className="max-w-[800px] relative z-50">
                <div className="flex items-center space-x-2">
                <p className="text-md leading-6 text-[#635D7E]"><b>4.9 - 1150</b> reviews</p>
                <div className="flex gap-2 items-center">
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                </div>
                </div>
                <span className="text-4xl leading-10 md:text-5xl text-secondary font-bold mt-4 block md:leading-16">Live Anywhere. Avoid Pet Fees.</span>
                <h1 className="font-semibold text-4xl leading-9 md:text-5xl text-primary mt-1 md:leading-14">Get an ESA Letter from Licensed Professionals.</h1>
                <div className="mt-7 flex flex-col space-y-3 items-start">
                <span className="flex items-center space-x-2"><img src="/images/double-check.svg" alt="Double Check" /><p className="text-sm md:text-xl text-[#635D7E] font-semibold">ESA Letters Delivered in Less Than 48 Hours</p></span>
                <span className="flex items-center space-x-2"><img src="/images/double-check.svg" alt="Double Check" /><p className="text-sm md:text-xl text-[#635D7E] font-semibold">Fully Compliant With Federal & State ESA Laws</p></span>
                <span className="flex items-center space-x-2"><img src="/images/double-check.svg" alt="Double Check" /><p className="text-sm md:text-xl text-[#635D7E] font-semibold">Approved by Licensed Mental Health Professionals</p></span>
                <span className="flex items-center space-x-2"><img src="/images/double-check.svg" alt="Double Check" /><p className="text-sm md:text-xl text-[#635D7E] font-semibold">No Pet Fees or Breed Restrictions</p></span>
                <span className="flex items-center space-x-2"><img src="/images/double-check.svg" alt="Double Check" /><p className="text-sm md:text-xl text-[#635D7E] font-semibold">Full Refund if You Don’t Qualify</p></span>
                </div>
                <button className="relative mt-14 h-[49px] md:h-[70px] min-w-[196px] flex items-center ps-16 md:ps-20 pe-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
                    <p className="md:text-xl text-sm leading-11 text-[#222D3F] font-bold">Get My ESA Letter Now &gt; </p>
                    <span className="flex items-center justify-center w-[43px] h-[43px] md:w-[60px] md:h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" className="w-[20px] md:w-[32px]" alt="Paw" /></span>
                </button>
                <div className="flex md:items-center mt-14 md:flex-row space-x-4 flex-col">
                <p className="text-[#635D7E] uppercase text-md">As Seen In</p>
                <img src="/images/company-icons.svg" alt="Icons" />
                </div>
            </div>
            <div className="w-[178px] h-[178px] absolute -top-20 -left-20 z-[-10]">
                <img src="/images/pattern.svg" className="w-full h-full object-contain" alt="Pattern" />
            </div>
        </div>
        <div className="w-full h-full relative md:absolute md:-bottom-20 md:right-0 z-[-10]">
        <img src="/images/illustration.svg" className="w-full h-full object-contain" alt="Illustration" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
            <img src="/images/arrow-down.svg" alt="Arrow Down" />
        </div>
    </div> 
    </>
  )
}

export default Banner
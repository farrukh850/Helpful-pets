import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; // Remove if not using React Router
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from '../components/Banner'
import StepsMock from '../Data/StepsMock'
import TrustMock from '../Data/TrustMock'
import ArticlesMock from '../Data/ArticlesMock'
import Carousel from '../components/Carousel'
import CommonHeading from '../components/CommonHeading'
// Custom Arrows
const NextArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="absolute top-full right-[38%] md:right-[50%] transform cursor-pointer -translate-y-1/2 z-50 block md:hidden"
    >
      <img src="/images/arrow-forwarda.svg" className="w-[42px]" alt="Arrow Next" />
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="absolute top-full left-[38%] md:left-[50%] transform cursor-pointer -translate-y-1/2 z-50 block md:hidden"
    >
      <img src="/images/arrow-back.svg" className="w-[42px]" alt="Arrow Back" />
    </button>
  );
};
const Home = () => {
    const settings = {
      dots: false, // Hide dots navigation
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 3, // Show only one slide at a time
      slidesToScroll: 1, // Scroll one slide at a time
      arrows: true, // Enable side arrows
      responsive: [
        {
          breakpoint: 1024, // When screen is <= 1024px
          settings: {
            slidesToShow: 2, // Show 3 slides
          },
        },
        {
          breakpoint: 768, // When screen is <= 768px
          settings: {
            slidesToShow: 1, // Show 2 slides
          },
        },
        {
          breakpoint: 480, // When screen is <= 480px (mobile)
          settings: {
            slidesToShow: 1, // Show 1 slide
          },
        },
      ],
      nextArrow: <NextArrow />, // Custom right arrow
      prevArrow: <PrevArrow />, // Custom left arrow
  };
  const [isBasic, setIsBasic] = useState(true); // Toggle state
    return (
    <>
     <Banner />
     <div className="bg-secondary">
       <div className="container">
          <div className="py-24">
           <CommonHeading text="Get Your ESA Letter in 3 Simple Steps" image="/images/paws.svg" color="#fff"  />
           <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 mt-24">
            {StepsMock.map((steps, index) => (
              <div key={index} className="flex flex-row md:flex-col space-y-4 items-center justify-center relative px-4 md:px-0 space-x-8 md:space-x-0">
               <div className="flex flex-col space-y-4 items-center">
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img src={steps.Image} alt="Step Icon" className="w-full h-full object-contain" />
                  </div>
                  <span className="w-12 h-12 rounded-full bg-primary text-accent text-3xl font-bold flex items-center justify-center relative z-50">{steps.number}</span>
               </div>
                <div className="flex flex-col space-y-4 items-start md:items-center">
                  <h4 className="text-2xl text-white font-bold md:text-center max-w-[75%]">{steps.Heading}</h4>
                  <p className="text-[22px] text-white md:text-center font-normal">{steps.paragraph}</p>
                  {index < 2 && (
                    <img src={steps.dottedArrow} alt="Loop" className="w-[80%] absolute top-[120%] left-[-20%] rotate-90 md:rotate-0 md:top-[30%] md:-translate-1/2 md:left-[110%]" />
                  )}
                </div>
              </div>
            ))}
           </div>
          </div>
       </div>
     </div>
     <div className="bg-white relative mb-112 md:mb-64">
        <div className="container">
          <div className="pt-28 px-8 md:px-16">
              <div className="grid grid-cols-12 gap-4 md:gap-24">
                <div className="flex col-span-12 md:col-span-5 space-y-8 items-start flex-col">
                  <h2 className="text-3xl leading-9 md:text-[40px] text-white md:leading-14 text-primary font-bold">What Is an Emotional Support Animal and Why Does It Matter?</h2>
                  <p className="text-lg leading-7 md:text-xl md:leading-8 text-[#635D7E]">Emotional Support Animals are more than pets. They provide relief for individuals with mental or emotional conditions and are legally protected under the Fair Housing Act. With an ESA Letter, landlords must allow your pet to live with you, regardless of no-pet policies.</p>
                  <div className="flex items-start space-x-5 p-6 bg-[#F2F9FF] rounded-3xl">
                      <img className="w-10" src="/images/lock.svg" alt="Lock" />
                      <span className="flex flex-col space-y-1">
                        <h4 className="text-xl leading-8 md:text-2xl text-primary font-bold md:leading-9">With an ESA Letter, </h4>
                        <p className="text-sm leading-6 md:leading-8 md:text-xl text-primary">your pet is legally protected under the Fair Housing Act. No housing restrictions and no extra pet fees.</p>
                      </span>
                  </div>
                </div>
                <div className=" col-span-12 md:col-span-7 relative">
                  <div className="grid grid-cols-2 gap-x-2 md:gap-x-7 relative z-50 justify-between">
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/blue-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">Protected Under the Fair Housing Act</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/orange-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">Exempt From No-Pet Policies</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/blue-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">No Extra Pet Fees or Deposits</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/orange-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">Certified by a Licensed Professional</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/blue-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">No Breed or Weight Limits</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/orange-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">Easy to Qualify Online in Minutes</p>
                    </div>
                    <div className="flex bg-white max-w-72 items-center mb-7 space-x-4 md:px-[11px] md:py-[18px] p-2 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                      <img src="/images/blue-pet-house.svg" alt="Pet House" />
                      <p className="text-[12px] leading-5 md:text-lg text-[#635D7E] md:leading-7">Approved in 48 Hours</p>
                    </div>
                  </div>
                  <div className="absolute w-[100%] h-[100%] top-[100%] md:top-[30%] md:left-1/2 md:-translate-x-1/2 md:right-0">
                    <img src="/images/womanandpet.png" className="w-full h-full object-contain" alt="Girl With dog" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[35%]">
            <img src="/images/arrow-down.svg" alt="Arrow Down" />
        </div>
     </div>
     <div className="py-24 bg-[#EFF6FF]">
        <div className="container">
          <CommonHeading text="Why Pet Owners Trust HelpfulPets.com" image="/images/paws-grey.svg" color="#234683"  />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 px-8 md:px-0">
            {TrustMock.map((Trust, index) => (
            <div className="flex max-w-52 mx-auto flex-col space-y-2 md:space-y-5 items-center">
                <div className="w-[135px] h-[135px] bg-white rounded-full flex items-center justify-center relative">
                  <img src={Trust.Image} alt="Trust Icon" />
                  <div className="absolute left-1/2 top-1/2 -translate-1/2 w-[97%] h-[97%]">
                    <img src={Trust.arc} className="absolute left-1/2 top-1/2 -translate-1/2" alt="Trust Ring" />
                  </div>
                </div>
                <h6 className="text-lg leading-7 md:text-xl text-center text-primary font-bold">{Trust.Heading}</h6>
                <p className="text-sm leading-5 md:text-lg md:leading-7 text-center text-[#635D7E]">{Trust.paragraph}</p>
            </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="relative mt-14 h-[49px] md:h-[70px] min-w-[196px] flex items-center ps-16 md:ps-20 pe-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
                <p className="md:text-xl text-sm leading-11 text-[#222D3F] font-bold">Get My ESA Letter Now &gt; </p>
                <span className="flex items-center justify-center w-[43px] h-[43px] md:w-[60px] md:h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" className="w-[20px] md:w-[32px]" alt="Paw" /></span>
            </button>
          </div>
        </div>
     </div>
     <div className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center px-4 md:px-0">
            <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
              <img src="/images/family-with-dog.svg" alt="Family with Dog" />
              <div className="flex items-start space-x-5 p-6 bg-[#eceeff] rounded-3xl">
                <img className="w-10" src="/images/lock-purple.svg" alt="Lock" />
                <span className="flex flex-col space-y-1">
                  <h4 className="text-2xl text-[#5D6FFB] font-bold leading-9">Under the Fair Housing Act,</h4>
                  <p className="leading-7 text-xl text-[#5D6FFB]">landlords must accept your ESA regardless of pet policies. No in-person visit is required.</p>
                </span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col space-y-4 items-start">
              <h3 className="text-[27px] leading-[55px] md:text-[40px] md:leading-14 text-primary font-bold">Who Qualifies for an ESA?</h3>
              <p className="text-[#635D7E]">If you experience mental or emotional health challenges, you may qualify for an Emotional Support Animal (ESA) under federal law. ESA Letters are commonly approved for</p>
              <div className="mt-8 rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:py-4 md:px-12 px-4 space-y-1 space-x-12">
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Anxiety</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Schizophrenia</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Panic Attacks</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Phobias</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Depression</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Personality</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">PTSD</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Disorders</p></span>
                  <span className="flex items-center gap-2"><img src="/images/check-orange.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Stress</p></span>
                </div>

              </div>
              <button className="relative mt-4 md:mt-14 h-[49px] md:h-[70px] min-w-[196px] flex items-center ps-16 md:ps-20 pe-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
                    <p className="md:text-xl text-sm leading-11 text-[#222D3F] font-bold">Check Your Eligibility Now &gt; </p>
                    <span className="flex items-center justify-center w-[43px] h-[43px] md:w-[60px] md:h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" className="w-[20px] md:w-[32px]" alt="Paw" /></span>
                </button>
            </div>
        </div>
      </div>
     </div>
     <div className="pt-4 md:pt-10 md:pb-36 pb-8 px-4 md:px-0">
        <div className="container relative">
          <h2 className="text-[27px] leading-8 md:text-[40px] text-primary md:leading-14 mb-4 font-bold">With vs. Without an ESA Letter:</h2>
          <h4 className="text-[27px] leading-8 text-4xl text-primary">What You Need to Know</h4>
          <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 justify-between mt-8 relative z-50" >
                <div className="inline-flex max-w-[480px] flex-col space-y-1 py-4 px-8  rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                  <span className="text-[22px] leading-8 text-[#635D7E] font-bold mb-2">Without an ESA Letter:</span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Limited Housing Options</p></span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Pay Expensive Pet Rent and Deposits</p></span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Landlords Can Deny Your Pet</p></span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Restricted by Breed, Size, or Weight</p></span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">No Legal Protection From Housing</p></span>
                  <span className="flex items-center gap-2"><img src="/images/not.svg" alt="Orange Check" /><p className="text-xl leading-8 text-[#635D7E]">Rejections</p></span>
                </div>
                <div className="inline-flex max-w-[480px] flex-col space-y-1 py-4 px-8  rounded-xl" style={{ boxShadow: "0px 34px 44px -5px #0000000F" }}>
                  <span className="text-[22px] leading-8 text-[#635D7E] font-bold mb-2">With an ESA Letter:</span>
                  <span className="flex items-center gap-2"><img src="/images/double-check.svg" alt="green Check" /><p className="text-xl leading-8 text-[#635D7E]">Live Anywhere With Your Pet</p></span>
                  <span className="flex items-center gap-2"><img src="/images/double-check.svg" alt="green Check" /><p className="text-xl leading-8 text-[#635D7E]">$0 Pet Rent and Deposits</p></span>
                  <span className="flex items-center gap-2"><img src="/images/double-check.svg" alt="green Check" /><p className="text-xl leading-8 text-[#635D7E]">Landlords Cancheck Deny Your Pet</p></span>
                  <span className="flex items-center gap-2"><img src="/images/double-check.svg" alt="green Check" /><p className="text-xl leading-8 text-[#635D7E]">No Breed, Size, or Weight Restrictions</p></span>
                  <span className="flex items-center gap-2"><img src="/images/double-check.svg" alt="green Check" /><p className="text-xl leading-8 text-[#635D7E]">Protected by Federal Housing Laws</p></span>
                </div>
          </div>
          <div className="md:absolute md:left-1/2 w-full h-full md:-translate-x-1/2 md:top-1/4">
            <img src="/images/girl-with-pet.svg" className="w-full h-full object-contain" alt="Girl with Pet" />
          </div>
        </div>
     </div>
     <div className="py-20 bg-[#EFF6FF]">
      <div className="container">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center space-x-2 mb-5 justify-center">
          <div className="flex gap-2 items-center">
            <img src="/images/star.svg" alt="Star" />
            <img src="/images/star.svg" alt="Star" />
            <img src="/images/star.svg" alt="Star" />
            <img src="/images/star.svg" alt="Star" />
            <img src="/images/star.svg" alt="Star" />
          </div>
         <div className="flex gap-2 items-center">
          <b className="text-xl text-[#56428D]">4.9</b>
          <p className="text-xl text-[#56428D]">Based in +500 comments</p>
         </div>
        </div>
        <CommonHeading text="Pet Owners Love HelpfulPets.com" image="/images/paws-grey.svg" color="#234683"  />
        <span className="text-xl leading-8 text-[#56428D] mt-6 text-center block">Don't take our word for it. Here are real reviews, from Verified Customers</span>
        <Carousel />
      </div>
     </div>
     <div className="bg-[#EFF6FF] pb-36 relative">
      <div className="container">
        <div className="absolute left-1/2 -translate-x-1/2 -top-20">
            <img src="/images/arrow-down.svg" alt="Arrow Down" />
        </div>
        <CommonHeading text="Support Animal Plans and Legal Rights" image="/images/paws-grey.svg" color="#234683"  />
        {/* Toggle Switch (Only for Mobile) */}
        <div className="flex justify-center space-x-2 items-center mt-4 md:hidden">
          {/* Toggle Container */}
          <span className="text-xl text-[#234683]">Basic</span>
          <div
            className={`relative w-10 h-5 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
              isBasic ? "bg-[#5D6FFB]" : "bg-[#2FCE74]"
            }`}
            onClick={() => setIsBasic(!isBasic)}
          >
            {/* Toggle Circle */}
            <div
              className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isBasic ? "translate-x-1" : "translate-x-6"
              }`}
            ></div>
          </div>
          <span className="text-xl text-[#234683]">Premium</span>
        </div>
        <div className="grid grid-cols-12 items-center rounded-[30px] bg-custom-gradient py-4 px-5 relative mt-36">
          <div className="col-span-8 relative">
            <div className="grid grid-cols-12 pb-7 border-dashed py-8 border-b border-[#937ECC] px-5">
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-2">
                <span className="flex items-center space-x-1"><img src="/images/paw-blue.svg" alt="Paw Blue" /><h6 className="text-xl md:text-2xl text-primary font-bold leading-8">Services</h6></span>
                <p className="text-sm text-[#635D7E] leading-6">Essential features of all our plans</p>
              </div>
              <img src="/images/big-arrow.svg" className="hidden md:block col-span-1" alt="Big Right Arrow" />
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-0 mt-4 md:space-y-7">
                <span className="flex items-center gap-3"><i className="block w-[10px] h-[10px] rounded-full bg-accent"></i><p className="text-sm md:text-[22px] text-primary leading-8">Mental health assement</p></span>
                <span className="flex items-center gap-3"><i className="block w-[10px] h-[10px] rounded-full bg-accent"></i><p className="text-sm md:text-[22px] text-primary leading-8">Documentation</p></span>
              </div>
            </div>
            <div className="grid grid-cols-12 pb-7 border-dashed py-8 border-b border-[#937ECC] px-5">
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-2">
                <span className="flex items-center space-x-1"><img src="/images/paw-blue.svg" alt="Paw Blue" /><h6 className="text-xl md:text-2xl text-primary font-bold leading-8">Rights</h6></span>
                <p className="text-sm text-[#635D7E] leading-6">As per the ADA, FHA, and ACAA</p>
              </div>
              <img src="/images/big-arrow.svg" className="hidden md:block col-span-1" alt="Big Right Arrow" />
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-0 mt-4 md:space-y-7">
                <div className="flex items-start gap-3 space-y-1">
                  <i className="block w-[10px] h-[10px] rounded-full bg-accent mt-3"></i>
                  <span>
                    <p className="text-sm md:text-[22px] text-primary leading-8">Mental health assement</p>
                    <p className="text-sm leading-5 text-[#635D7E]">Live with your animal, exempt from fees and bans</p>
                  </span>
                </div>
                <div className="flex items-start gap-3 space-y-1">
                  <i className="block w-[10px] h-[10px] rounded-full bg-accent mt-3"></i>
                  <span>
                    <p className="text-sm md:text-[22px] text-primary leading-8">Air travel rights</p>
                    <p className="text-sm leading-5 text-[#635D7E]">Fly with your dog in cabin free of charge</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 pb-7 border-dashed py-8 px-5">
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-2">
                <span className="flex items-center space-x-1"><img src="/images/paw-blue.svg" alt="Paw Blue" /><h6 className="text-xl md:text-2xl text-primary font-bold leading-8">Optinal Benefits</h6></span>
                <p className="text-sm text-[#635D7E] leading-6">Make your investment got the extra mile</p>
              </div>
              <img src="/images/big-arrow.svg" className="hidden md:block col-span-1" alt="Big Right Arrow" />
              <div className="col-span-12 md:col-span-5 flex flex-col space-y-0 mt-4 md:space-y-7">
                <div className="flex items-start gap-3 space-y-1">
                  <i className="block w-[10px] h-[10px] rounded-full bg-accent mt-3"></i>
                  <span>
                    <p className="text-sm md:text-[22px] text-primary leading-8">Priority support</p>
                  </span>
                </div>
                <div className="flex items-start gap-3 space-y-1">
                  <i className="block w-[10px] h-[10px] rounded-full bg-accent mt-3"></i>
                  <span>
                    <p className="text-sm md:text-[22px] text-primary leading-8">Discounted yearly renewal</p>
                  </span>
                </div>
              </div>
            </div>
            <span className="w-50 h-25 bg-white rounded-lg flex items-center justify-center text-[25px] md:text-3xl leading-14 text-primary absolute top-[-80px] left-[-20px] font-bold">Features</span>
          </div>
          <div className="col-span-4 flex space-x-4 absolute right-0 top-[-63px] md:top-[10]">
          {(isBasic || window.innerWidth >= 768) && (
            <div className="flex col-span-2 flex-col space-y-11 rounded-xl p-[14px] bg-white relative min-w-[150px] me-4 md:min-w-[200px]">
              <span className="w-full h-12 md:h-25 rounded-lg text-[22px] md:text-3xl text-white leading-14 font-bold bg-[#5D6FFB] flex items-center justify-center" style={{ boxShadow: "0px 34px 44px -5px #0000000F;" }}>
                Basic
              </span>
              <div className="flex space-y-12 flex-col items-center">
                <img src="/images/purple-check.svg" className="w-[24px] mt-28 md:w-[38px]" alt="Purple Check" />
                <img src="/images/purple-check.svg" className="w-[24px] mt-[-20px] md:w-[38px]" alt="Purple Check" />
                <img src="/images/purple-check.svg" className="w-[24px] md:w-[38px] md:mt-4 mt-32" alt="Purple Check" />
                <img src="/images/grey-check.svg" className="w-[24px] md:w-[38px] md:mt-4 mt-8" alt="Purple Check" />
                <img src="/images/grey-check.svg" className="w-[24px] md:w-[38px] md:mt-8 mt-44" alt="Purple Check" />
                <img src="/images/grey-check.svg" className="w-[24px] mt-[-30px] md:w-[38px]" alt="Purple Check" />
              </div>
              <button className="w-full h-[74px] bg-[#e9ecf3] text-[30px] md:text-5xl leading-14 text-primary font-bold rounded-lg">$159</button>
            </div>
            )}
            {(!isBasic || window.innerWidth >= 768) && (
              <div className="flex col-span-2 flex-col space-y-11 rounded-xl p-[14px] bg-white relative min-w-[150px] me-4 md:min-w-[200px]">
              <span className="w-full h-12 md:h-25 rounded-lg text-[22px] md:text-3xl text-white leading-14 font-bold bg-[#2FCE74] flex items-center justify-center" style={{ boxShadow: "0px 34px 44px -5px #0000000F;" }}>
                Premium
              </span>
              <div className="flex space-y-12 flex-col items-center">
                <img src="/images/double-check.svg" className="w-[24px] mt-28 md:w-[38px]" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] mt-[-20px] md:w-[38px]" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-4 mt-32" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-4 mt-8" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-8 mt-44" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] mt-[-30px] md:w-[38px]" alt="Purple Check" />
              </div>
              <button className="w-full h-[74px] bg-[#e9ecf3] text-[30px] md:text-5xl leading-14 text-primary font-bold rounded-lg">$159</button>
            </div>
            )}
            {/* <div className="hidden md:flex col-span-2 flex-col space-y-11 rounded-xl p-[14px] bg-white relative md:min-w-[200px]">
              <span className="w-full h-25 rounded-lg text-3xl text-white leading-14 font-bold bg-[#2FCE74] flex items-center justify-center" style={{ boxShadow: "0px 34px 44px -5px #0000000F;" }}>
              Premium
              </span>
              <div className="flex space-y-12 flex-col items-center">
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px]" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] mt-[-10px]" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-4" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-4" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px] md:mt-8" alt="Purple Check" />
                <img src="/images/double-check.svg" className="w-[24px] md:w-[38px]" alt="Purple Check" />
              </div>
              <button className="w-full h-[74px] bg-[#e9ecf3] text-5xl leading-14 text-primary font-bold rounded-lg">$199</button>
            </div> */}
          </div>
        </div>
      </div>
     </div>
     <div className="py-18">
      <div className="container">
        <CommonHeading text="Latest Articles" image="/images/paws-grey.svg" color="#234683"  />
          <Slider {...settings} className="pb-12 mt-8 md:mt-24">
            {ArticlesMock.map((Article, index) => (
              <div className="flex flex-col space-y-4 px-4 md:px-0">
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                  <img src={Article.Image} alt="Blog Image" className="w-full h-full object-contain" />
                </div>
                <small className="text-sm leading-6 text-[#45C199]">{Article.date}</small>
                <h4 className="text-2xl font-bold text-[#635D7E]">{Article.Heading}</h4>
                <p className="text-sm text-[#635D7E] leading-5">{Article.paragraph}</p>
                <div className="flex items-center space-x-2">
                  {Article.tags.map((articletags, index) => (
                  <span className="text-sm leading-6 bg-[#f4f2fa] px-3 min-h-[27px] flex items-center text-[#635D7E] justify-center rounded-[3px]">{articletags}</span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
      </div>
     </div>
     <div className="container">
      <div className="grid items-center space-y-4 md:space-y-0 md:grid-cols-2 p-5 bg-[#EFF6FF] rounded-2xl mb-12">
        <div className="flex flex-col ps-12 relative">
          <small className="text-lg leading-8 text-[#2FCE74] font-bold mb-2">Social Community</small>
          <h4 className="text-3xl leading-8 md:text-[40px] font-bold md:leading-12 text-[#072D6F] mb-8 relative z-10">Learn and share information in our <b className="text-[#5D6FFB]">TikTok and Instagram</b></h4>
          <div className="flex items-center space-x-4">
            <p className="text-[22px] text-primary">#HepfulPetsFamily</p>
            <Link to="/"><img src="/images/instagram.svg" alt="Instagram" /></Link>
            <Link to="/"><img src="/images/tiktok.svg" alt="Tiktok" /></Link>
          </div>
          <img src="/images/tiktok-light.svg" className="absolute right-[-30px] md:right-0 top-[-10px] md:top-[-30px]" alt="Tiktok" />
          <img src="/images/insta-light.svg" className="absolute left-[-20px] bottom-0" alt="Instagram" />
        </div>
        <div className="w-full h-[345px] rounded-2xl overflow-hidden">
          <img src="/images/family-with-pet.png" className="w-full h-full object-cover object-center" alt="Family With Pet" />
        </div>
      </div>
     </div>
     <div className="py-20 pb-64 bg-[#24B2BC] bg-[url('/images/clouds.svg')] bg-cover bg-center">
      <div className="container">
        <CommonHeading text="Ready to Get Started?" image="/images/paws.svg" color="#fff"  />
        <span className="block w-8 h-[2px] bg-accent mx-auto my-6"></span>
        <span className="block text-3xl leading-8 text-white text-center">Get your ESA Letter Today</span>
        <div className="flex justify-center">
          <button className="relative mt-8 h-[70px] min-w-[196px] flex items-center ps-20 pe-16 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
            <p className="text-xl leading-11 text-[#222D3F] font-bold">Get Started &gt; </p>
            <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" alt="Paw" /></span>
          </button>
        </div>
      </div>
     </div>
     <div className="bg-[#EFF6FF] md:py-10 pt-50">
      <div className="container relative">
        <div className="flex flex-col max-w-[650px] justify-end ms-auto px-4 md:px-0">
          <div className="relative md:min-w-[500px]">
            <h2 className={`font-[Cerebri] text-[#234683] z-20 relative text-[45px] text-center font-bold`}>Newsletter</h2>
            <img src="/images/paws-grey.svg" alt="Paws" className="absolute top-1/2 -translate-y-1/2 h-[100px]" />
          </div>
          <span className="block w-8 h-[2px] bg-accent mx-auto my-6"></span>
          <p className="text-[22px] text-center leading-7 text-[#635D7E]">Sign up for our mailing list, and we'll send you cool updates on pupp stuff!</p>
          <form action="#" className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-2 mt-8">
            <input type="text" placeholder="Enter your email" className="text-xl leading-7 text-[#635D7E] rounded-[35px] bg-white h-[71px] ps-8" />
            <button className="relative h-[70px] w-full md:min-w-[196px] flex items-center justify-between ps-20 pe-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
              <p className="text-xl leading-11 text-[#222D3F] font-bold">Subscribe</p>
              <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" alt="Paw" /></span>
            </button>
          </form>
        </div> 
        <div className="absolute left-0 md:-top-[170%] top-[-120%]">
          <img src="/images/illustration2.svg" alt="Illustration" />
        </div>
      </div>
     </div>
    </>
    );
}

export default Home
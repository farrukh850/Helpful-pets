import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => {
    return (
      <button 
        onClick={onClick} 
        className="absolute top-1/2 right-[10px] md:right-[-40px] transform cursor-pointer -translate-y-1/2 z-50"
      >
        <img src="/images/arrow-forwarda.svg" alt="Arrow Next" />
      </button>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
      <button 
        onClick={onClick} 
        className="absolute top-1/2 left-[10px] md:left-[-40px] transform cursor-pointer -translate-y-1/2 z-50"
      >
        <img src="/images/arrow-back.svg" alt="Arrow Back" />
      </button>
    );
};


const Carousel = () => {
  const settings = {
    dots: false, // Hide dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable side arrows
    fade: true,
    nextArrow: <NextArrow />, // Custom right arrow
    prevArrow: <PrevArrow />, // Custom left arrow
  };

  return (
    <div className="w-full mx-auto mt-12">
      <Slider {...settings} className="pb-12">
        <div className={`md:rounded-[35px] bg-[#234683] relative`}>
           <div className="flex flex-col md:flex-row items-center justify-between py-10">
            <div className="flex-1 flex flex-col items-center justify-center">
               <div className="max-w-[396px] text-center">
                <small className="text-xl leading-16 text-accent">Sarah T.</small>
                    <div className="flex gap-2 items-center justify-center mb-12">
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                    </div>
                    <span className="inline-block w-[34px] h-[2px] bg-accent mb-8"></span>
                    <h3 className="text-[22px] leading-7 md:text-3xl md:leading-11 font-bold text-white">I received my ESA letter quickly, and my landlord approved it right away! </h3>
               </div>
            </div>
            <div className="flex-1">
                <div className="w-full h-[412px] relative">
                    <img src="/images/slide-img1.png" className="w-full h-full object-contain" alt="Slidr Image" />
                </div>
            </div>
           </div>
           <div className="absolute left-7 top-8">
            <img src="/images/quotes.svg" alt="Quotes" />
           </div>
        </div>
        <div className={`rounded-[35px] bg-[#234683] relative`}>
           <div className="flex flex-col md:flex-row  items-center justify-between py-10">
            <div className="flex-1 flex flex-col items-center justify-center">
               <div className="max-w-[396px] text-center">
                <small className="text-xl leading-16 text-accent">Sarah T.</small>
                    <div className="flex gap-2 items-center justify-center mb-12">
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                        <img src="/images/star.svg" className="w-[23px]" alt="Star" />
                    </div>
                    <span className="inline-block w-[34px] h-[2px] bg-accent mb-8"></span>
                    <h3 className="text-3xl leading-11 font-bold text-white">I received my ESA letter quickly, and my landlord approved it right away! </h3>
               </div>
            </div>
            <div className="flex-1">
                <div className="w-full h-[412px] relative">
                    <img src="/images/slide-img1.png" className="w-full h-full object-contain" alt="Slidr Image" />
                    <img src="/images/slide-img2.png" className="w-full h-full object-contain absolute inset-0 rotate-[5deg]" alt="Slidr Image" />
                </div>
            </div>
           </div>
           <div className="absolute left-7 top-8">
            <img src="/images/quotes.svg" alt="Quotes" />
           </div>
        </div>
        {/* {slides.map((slide) => (
          
        ))} */}
      </Slider>
      <button className="relative mx-auto mt-0 md:mt-12 h-[70px] min-w-[196px] flex items-center ps-20 pe-16 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
        <p className="text-xl leading-11 text-[#222D3F] font-bold">See More Review Here &gt; </p>
        <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full absolute top-1/2 -translate-y-1/2 left-[5px] bg-primary"><img src="/images/paw.svg" alt="Paw" /></span>
      </button>
      <div className="my-18">
        <img src="/images/border.svg" className="w-full h-1" alt="Border" />
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import { Link } from "react-router-dom"; // Remove if not using React Router

const Footer = () => {
  return (
    <footer className="bg-[#EFF6FF] pt-10">
    <div className="container rounded-t-[45px] bg-[#234683] px-4 md:px-16 pt-16 pb-8">
      <div className="grid space-y-4 md:space-y-0 grid-cols-12">
        <span className="col-span-12 text-[40px] md:col-span-3 text-white font-bold leading-16">HepfulPets</span>
        <div className="flex col-span-6 md:col-span-3 flex-col space-y-2">
          <span className="text-lg leading-8 font-bold text-[#FFC24F]">Easy Links</span>
          <Link className="text-lg leading-8 text-white">ESALaws FAQs</Link>
          <Link className="text-lg leading-8 text-white">About Contact Login</Link>
          <Link className="text-lg leading-8 text-white">Terms of Use </Link>
          <Link className="text-lg leading-8 text-white">Privacy Policy</Link>
        </div>
        <div className="flex col-span-6 md:col-span-3 flex-col space-y-2">
          <span className="text-lg leading-8 font-bold text-[#FFC24F]">Contact</span>
          <Link className="text-lg leading-8 text-white">info@helpfulpet.com</Link>
          <Link className="text-lg leading-8 text-white">+51 003 039 07 50 </Link>
          <span className="text-lg leading-8 font-bold text-[#FFC24F] md:mt-3">Follow Us</span>
          <div className="flex items-center space-x-3">
            <Link><img src="/images/fb.svg" alt="Facebook" /></Link>
            <Link><img src="/images/insta.svg" alt="Instgram" /></Link>
            <Link><img src="/images/tiktok-white.svg" alt="Tiktok" /></Link>
          </div>
        </div>
        <div className="flex col-span-6 md:col-span-3 flex-col space-y-2">
          <span className="text-lg leading-8 font-bold text-[#FFC24F]">As seen in</span>
          <div className="flex items-center flex-wrap gap-5">
            <img src="/images/footer-icon1.svg" alt="Icon" />
            <img src="/images/footer-icon2.svg" alt="Icon" />
            <img src="/images/footer-icon3.svg" alt="Icon" />
            <img src="/images/footer-icon4.svg" alt="Icon" />
            <img src="/images/footer-icon5.svg" alt="Icon" />
          </div>
        </div>
      </div>
      <div className="md:grid flex flex-col-reverse space-y-4 md:space-y-0 md:grid-cols-12 mt-25">
        <small className="col-span-12 text-white md:col-span-3 opacity-50 text-sm leading-8">© 2025 HelpfulPets.com. All rights reserved.</small>
        <div className="col-span-12 md:col-span-9">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-8 items-center p-5 bg-[#31528c] bg-opacity-[20%] rounded-2xl">
            <span className="text-sm leading-7 text-white"><b className="text-[#FFC24F]">Get it touch?</b> We're usually around weekdays 9 am - 5 pm ET The fastest way to reach us is consult@helpfulpet.com</span>
            <div className="flex items-center space-x-10">
              <span className="flex items-center flex-col space-y-1"><img src="/images/footer-icon6.svg" className="w-4 h-4 object-contain" alt="FAQ Icon" /><p className="text-sm leading-7 text-white">FAQ</p></span>
              <span className="flex items-center flex-col space-y-1"><img src="/images/footer-icon7.svg" className="w-4 h-4 object-contain" alt="FAQ Icon" /><p className="text-sm leading-7 text-white">Chat</p></span>
              <span className="flex items-center flex-col space-y-1"><img src="/images/footer-icon8.svg" className="w-4 h-4 object-contain" alt="FAQ Icon" /><p className="text-sm leading-7 text-white">Email</p></span>
              <span className="flex items-center flex-col space-y-1"><img src="/images/footer-icon9.svg" className="w-4 h-4 object-contain" alt="FAQ Icon" /><p className="text-sm leading-7 text-white">Text</p></span>
              <span className="flex items-center flex-col space-y-1"><img src="/images/footer-icon10.svg" className="w-4 h-4 object-contain" alt="FAQ Icon" /><p className="text-sm leading-7 text-white">Call</p></span>
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>
  );
};

export default Footer;

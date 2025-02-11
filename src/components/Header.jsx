import React, { useState } from "react";
import { Link } from "react-router-dom"; // Remove if not using React Router
import { FiMenu, FiX } from "react-icons/fi"; // Install react-icons if needed
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#EFF6FF] pt-4 pb-4 px-4 md:px-0 relative">
        <nav>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}    
                <Link to="/" className="font-[poppins] text-2xl md:text-[40px] font-bold text-primary">
                    HepfulPets
                </Link>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li><Link to="/" className="text-lg text-[#222D3F] font-semibold">Home</Link></li>
                    <li><Link to="/about" className="text-lg text-[#222D3F] font-semibold">ESA Laws</Link></li>
                    <li><Link to="/services" className="text-lg text-[#222D3F] font-semibold">FAQs</Link></li>
                    <li><Link to="/contact" className="text-lg text-[#222D3F] font-semibold">About</Link></li>
                    <li><Link to="/contact" className="text-lg text-[#222D3F] font-semibold">Contact Us</Link></li>
                </ul>

                {/* Right Button */}
                <button className="relative h-[37px] min-w-[147px] md:h-[54px] md:min-w-[196px] flex items-center px-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
                    <p className="text-sm md:text-xl leading-11 text-[#222D3F] font-bold">Get Started </p>
                    <span className="flex items-center justify-center w-[50px] h-[50px] md:w-[72px] md:h-[72px] rounded-full border-[5px] border-[#FFC24F] absolute top-1/2 -translate-y-1/2 -right-3 md:-right-7 bg-primary"><img src="/images/paw.svg" className="w-[21px] md:w-[32px]" alt="Paw" /></span>
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center relative z-[1000]">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                    {isOpen ? <img src="/images/close.svg"/> : <img src="/images/bars.svg"/>}
                </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary pt-20 py-4 px-6 shadow-md h-[100vh] w-[100%] fixed left-0 top-0 bottom-0 right-0 z-[100]">
                    <ul className="text-lg text-center">
                        <li className="py-4 border-b text-left border-[#fefefe]"><Link to="/" onClick={() => setIsOpen(false)} className="block text-lg text-white font-semibold">Home &gt;</Link></li>
                        <li className="py-4 border-b text-left border-[#f1f1f1]"><Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg text-white font-semibold">ESA Laws &gt;</Link></li>
                        <li className="py-4 border-b text-left border-[#f1f1f1]"><Link to="/services" onClick={() => setIsOpen(false)} className="block text-lg text-white font-semibold">FAQs &gt;</Link></li>
                        <li className="py-4 border-b text-left border-[#f1f1f1]"><Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg text-white font-semibold">About &gt;</Link></li>
                        <li className="py-4 border-b text-left border-[#f1f1f1]"><Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg text-white font-semibold">Contact Us &gt;</Link></li>
                    </ul>
                    <div className="flex items-center justify-between mt-8">
                        <img src="/images/4-paws.svg" alt="Paws" />
                        <button className="relative h-[37px] min-w-[147px] md:h-[54px] md:min-w-[196px] flex items-center px-6 py-[6px] bg-accent rounded-[45px] bg-accent cursor-pointer">
                            <p className="text-sm md:text-xl leading-11 text-[#222D3F] font-bold">Get Started </p>
                            <span className="flex items-center justify-center w-[50px] h-[50px] md:w-[72px] md:h-[72px] rounded-full border-[5px] border-[#FFC24F] absolute top-1/2 -translate-y-1/2 -right-3 md:-right-7 bg-primary"><img src="/images/paw.svg" className="w-[21px] md:w-[32px]" alt="Paw" /></span>
                        </button>
                    </div>
                    <div className="grid grid-cols-12 mt-24">
                        <div className="col-span-7">
                            <h5 className="text-lg leading-8 text-white font-bold">Easy Links</h5>
                            <div className="flex flex-col space-y-2">
                                <Link  className="text-lg leading-8 text-white" to="#">ESALaws</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">FAQs</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">Contact</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">Login</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">TermsofUse</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">PrivacyPolicy</Link>
                            </div>

                        </div>
                        <div className="col-span-5">
                            <h5 className="text-lg leading-8 text-white font-bold">Follow Us</h5>
                            <div class="flex items-center space-x-3"><a href="/" data-discover="true"><img alt="Facebook" src="/images/fb.svg" /></a><a href="/" data-discover="true"><img alt="Instgram" src="/images/insta.svg" /></a><a href="/" data-discover="true"><img alt="Tiktok" src="/images/tiktok-white.svg" /></a></div>
                        </div>
                        <div className="col-span-12 mt-7">
                            <h5 className="text-lg leading-8 text-white font-bold">Contact</h5>
                            <div className="flex flex-col space-y-2">
                                <Link  className="text-lg leading-8 text-white" to="#">info@helpfulpet.com</Link>
                                <Link  className="text-lg leading-8 text-white" to="#">+51 003 039 07 50</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    </header>
  );
};

export default Header;

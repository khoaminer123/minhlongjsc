import React, { useState } from 'react';
import Logo from '../Assets/Logo Minh Long.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  function gotoIntro() {
    navigate("/gioithieu/");
  }


  return (
    <nav className="bg-[#EDF1F2] from-[#068CC3] to-[#04457B] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 w-[15%] md:w-[9%]">
            <a href="/" className="text-white font-bold text-xl">
              <img className='w-full' src={Logo} alt="" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-sky-600 hover:bg-[#057EB4] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Trang chủ
              </a>
              <a href="/gioi-thieu/" className="text-sky-600 hover:bg-[#057EB4] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Giới thiệu
              </a>
              <a href="/du-an/" className="text-sky-600 hover:bg-[#057EB4] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dự án
              </a>
              <a href="/khach-hang/" className="text-sky-600 hover:bg-[#057EB4] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Khách hàng
              </a>
              <a href="https://forms.gle/C85RhheeZJjtducj6" className="text-sky-600 hover:bg-[#057EB4] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Liên hệ
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-blue-950 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#055A91] focus:outline-none"
              // focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-sky-600 hover:bg-gradient-to-r from-[#04457B] to[#068CC3] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Trang chủ
            </a>
            <a href="/gioi-thieu/" className="text-sky-600 hover:bg-gradient-to-r from-[#04457B] to[#068CC3] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Giới thiệu
            </a>
            <a href="/du-an/" className="text-sky-600 hover:bg-gradient-to-r from-[#04457B] to[#068CC3] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Dự án
            </a>
            <a href="/khach-hang/" className="text-sky-600 hover:bg-gradient-to-r from-[#04457B] to[#068CC3] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Khách hàng
            </a>
            <a href="https://forms.gle/C85RhheeZJjtducj6" className="text-sky-600 hover:bg-gradient-to-r from-[#04457B] to[#068CC3] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
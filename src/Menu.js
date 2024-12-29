import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-white rounded-lg lg:flex-row-reverse">
      <nav
        className={`fixed top-0 left-0 w-3/4 h-full bg-gray-800 p-5 transform transition-all duration-300 ease-in-out rounded-lg 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:w-auto lg:p-0 lg:bg-transparent lg:transform-none`}
        style={{ zIndex: 999 }}
      >
        <ul className="flex flex-col space-y-5 text-xl lg:flex-row lg:space-x-5 lg:space-y-0 lg:text-base">
          <li>
            <a href="#portfolio" className="hover:text-blue-500 transition duration-300 ease-in-out" data-aos="fade-left" data-aos-delay="100">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500 transition duration-300 ease-in-out" data-aos="fade-left" data-aos-delay="200">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition duration-300 ease-in-out" data-aos="fade-left" data-aos-delay="300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition duration-300 ease-in-out" data-aos="fade-left" data-aos-delay="400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={toggleMenu} className="lg:hidden">
        <div className="flex flex-col space-y-2">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </button>
    </header>
  );
}

export default Menu;

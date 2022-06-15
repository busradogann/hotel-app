import React, { useState } from 'react';
import logo from '../assets/img/dummy-logo.png'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if(isOpen) {
      document.querySelector('#menu').style.display = 'none';
      setIsOpen(false);
    } else if(!isOpen) {
      document.querySelector('#menu').style.display = 'block';
      setIsOpen(true);
    }
  }

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
        <div className='w-20'>
          <a href="/">
            <img src={logo} alt={'logo'} />
          </a>
        </div>

        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>

        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <a className="md:p-4 py-2 block hover:text-red-400 font-bold" href="/">Hotels</a>
            </li>
            <li>
              <a className="md:p-4 py-2 block text-red-400 font-bold" href="/add-hotel">Add Hotel</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

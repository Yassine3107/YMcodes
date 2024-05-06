'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div   className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-[100] ${
        visible ? 'opacity-100 bg-black' : 'opacity-0 -translate-y-full'
      }`}>
        <nav className="container flex mx-auto flex-wrap items-center justify-between p-3  relative" style={{zIndex: 60}}>
        
            <Link href={'#about'}>
                <span className="text-white text-2xl font-extrabold font-futuristic">
                <svg width="150" height="45" viewBox="0 0 200 60" className="css-1j8o68f"><defs id="SvgjsDefs1716"></defs><g id="SvgjsG1717" featurekey="symbolContainer" transform="matrix(1,0,0,1,0,0)" fill="#3b82f6"><rect width="80" height="60" rx="8"></rect></g><g id="SvgjsG1718" featurekey="symbolFeature-0" transform="matrix(0.4444444444444444,0,0,0.4444444444444444,17.77777777777778,7.83084954155816)" fill="#ffffff"><g xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M24.755,34.336c-1.597-1.598-4.188-1.598-5.785,0L6.199,47.106l-0.001,0.001C5.4,47.906,5,48.953,5,50   c0,1.047,0.4,2.094,1.198,2.893l12.771,12.772c1.597,1.598,4.187,1.598,5.785,0c1.597-1.598,1.597-4.188,0-5.785L14.876,50   l9.879-9.879C26.352,38.524,26.352,35.933,24.755,34.336z"></path><path fill="#ffffff" d="M93.801,47.107L81.029,34.336c-1.598-1.597-4.188-1.597-5.785,0c-1.597,1.598-1.597,4.188,0,5.785   L85.123,50l-9.879,9.879c-1.597,1.598-1.597,4.188,0,5.785c1.597,1.598,4.187,1.598,5.785,0l12.772-12.772   C94.6,52.094,95,51.047,95,50C95,48.953,94.6,47.906,93.801,47.107z"></path><path fill="#ffffff" d="M64.676,16.475c-2.069-0.906-4.482,0.037-5.388,2.107L33.216,78.137c-0.906,2.069,0.037,4.482,2.107,5.388   c2.069,0.906,4.482-0.037,5.388-2.107l26.072-59.555C67.689,19.794,66.746,17.381,64.676,16.475z"></path></g></g><g id="SvgjsG1719" featurekey="nameFeature-0" transform="matrix(1.7337030661817523,0,0,1.7337030661817523,97.78086136493006,-14.388345148334373)" fill="#3b82f6"><path d="M11.48 37.76 l0 -8.64 l-9.64 -13.24 c-0.32 -0.48 -0.56 -1.04 -0.56 -1.72 c0 -1.32 1.08 -2.36 2.48 -2.36 c1.08 0 1.8 0.6 2.4 1.48 l7.8 11.24 l7.92 -11.28 c0.6 -0.88 1.32 -1.48 2.36 -1.48 c1.44 0 2.4 1.08 2.4 2.4 c0 0.68 -0.32 1.28 -0.68 1.76 l-9.56 13.08 l0 8.76 c0 1.36 -1.08 2.44 -2.48 2.44 c-1.36 0 -2.44 -1.08 -2.44 -2.44 z M31.44 37.8 l0 -23.48 c0 -1.36 1.08 -2.48 2.48 -2.48 l0.52 0 c1.08 0 1.8 0.56 2.28 1.32 l8.48 13.28 l8.52 -13.32 c0.52 -0.84 1.24 -1.28 2.24 -1.28 l0.52 0 c1.4 0 2.48 1.12 2.48 2.48 l0 23.44 c0 1.36 -1.08 2.44 -2.48 2.44 c-1.32 0 -2.44 -1.12 -2.44 -2.44 l0 -16.8 l-6.84 10.28 c-0.52 0.8 -1.16 1.28 -2.08 1.28 c-0.88 0 -1.52 -0.48 -2.04 -1.28 l-6.8 -10.2 l0 16.76 c0 1.36 -1.08 2.4 -2.44 2.4 s-2.4 -1.04 -2.4 -2.4 z"></path></g></svg>
                </span>
            </Link>
            <div className="flex lgt:hidden">
                <button id="hamburger">
                <svg onClick={() => setHidden(!hidden)} fill='white' className='svgicon' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>          
                </button>
            </div>
            <div
                className={`toggle ${hidden ? 'hidden' : ''} w-full lgt:w-auto lgt:flex text-right text-bold mt-5 lgt:mt-0 border-t-2 border-blue-900 lgt:border-none`}>
                <Link href="#about"
                    className="block lgt:inline-block font-bold text-[#3B82F6] text-xl px-3 py-3 border-b-[3px] border-[#3B82F6] shadow-bottom-sh shadow-blue-500/60 hover:shadow-blue-500/100 mx-2">About
                </Link>
                <Link href="#more"
                    className="block lgt:inline-block font-bold text-[#3B82F6] text-xl px-3 py-3 border-b-[3px] border-[#3B82F6] shadow-bottom-sh shadow-blue-500/60 hover:shadow-blue-500/100 mx-2">Skills
                </Link>
                <Link href="#projects"
                    className="block lgt:inline-block font-bold text-[#3B82F6] text-xl px-3 py-3 border-b-[3px] border-[#3B82F6] shadow-bottom-sh shadow-blue-500/60 hover:shadow-blue-500/100 mx-2">Projects
                </Link>
                <Link href="#contact"
                    className="block lgt:inline-block font-bold text-[#3B82F6] text-xl px-3 py-3 border-b-[3px] border-[#3B82F6] shadow-bottom-sh shadow-blue-500/60 hover:shadow-blue-500/100 mx-2">Contact
                </Link>
            </div>
        </nav>
    </div>

  );
};

export default Navbar;




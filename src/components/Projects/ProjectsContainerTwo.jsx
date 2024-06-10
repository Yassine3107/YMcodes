'use client'

import React, { useState } from 'react';
import Title from '../common/Title'
import { useInView } from 'react-intersection-observer';
import NeonButton from '../common/NeonButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function ProjectsContainerTwo() {
  const projects = [
    { image: '/findiful.png', alt: 'findiful', defaultText: 'Findiful', hoverText: 'Findiful', tech: ['NodeJs, ElectronJs, React, Firebase, Stripe'], website: 'https://findiful.com'},
    { image: '/epc247.png', alt: 'epc247', defaultText: 'EPC247', hoverText: 'EPC247',tech: ['React, NextJs, Styled Components, Firebase'], website: 'https://epc247.be'},
    { image: '/naturesGlitch.png', alt: 'naturesglitch', defaultText: 'Natures Glitch', hoverText: 'NaturesGlitch', tech: ['React, NextJs, NodeJs, Tailwind, CMS, nginx, mysql'], website: 'https://naturesglitch.com'},
    { image: '/nsapp.png', alt: 'nsapp', defaultText: 'Nightshop App', hoverText: 'Nightshop App', tech: ['React, NextJs, Tailwind, IN PROGRESS...'], website: 'https://stingray-app-3ozgo.ondigitalocean.app'},
    { image: '/taxirover.png', alt: 'taxirover', defaultText: 'Taxi Rover', hoverText: 'Taxi Rover', tech: ['React, NextJs, Tailwind, wordpress'], website: ''},

  ];
  const router = useRouter();

  const [hoveredProject, setHoveredProject] = useState(null);
  const { ref: cardRef, inView: visible } = useInView({
    threshold: .2,
    triggerOnce: true
  });
  

  return (
    
    <div ref={cardRef} id='projects' className={`display flex flex-col justify-evenly relative min-h-screen lgt:my-[100px] `} >
    <Title title={'Projects'}/>    
    <div className={`flex flex-col w-5/6 mx-auto grid grid-cols-2 smt:grid-cols-1 lgt-1400:grid-cols-3 gap-3 `}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`card relative rounded overflow-hidden group translate-y-6 ${visible ? 'cardShow' : 'cardHidden'}`}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
          onTouchStart={() => setHoveredProject(index)}
        >
          <img src={project.image} alt={project.alt} className="w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition duration-300 ease-in group-hover:text-white group-hover:bg-gray-800 group-hover:bg-opacity-100 transition ">
            {hoveredProject !== index ?  <p className=''>{project.defaultText}</p> : 
                <div className='flex flex-col justify-around slideFromBottom slideFromTop h-full w-full smt:py-4 md:py-4'>
                    <span className='lgt:text-4xl mb-3 font-bold topDown'>{project.hoverText}</span>
                    <span className='smt:text-xl text-[#3B82F6] p-4 bottomUp'>
                        {
                            project.tech.map((tech) => (
                                tech + ''
                            ))
                        }
                    </span>
                    <button onClick={() => {router.push(`/project/${project.alt}`)}} className={`bottomUp text-xl smt:text-md lgt:font-bold relative lgt-1400:w-2/5 mx-auto mt-5 z-50 border-[3px] smt:border-[2px] border-[#3B82F6] text-[#3B82F6] py-3 smt:py-1 px-8 smt:px-5 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 translate-y- slide `}>
                        View
                    </button>
                </div>
            }
          </div>
        </div>
      ))}
    </div>
    <div className='flex justify-center mx-auto relative smt-1400:hidden z-[61] mt-8'>
        <NeonButton text="Contact" section="contact"/>
      </div>
    </div>
    
  );
}

export default ProjectsContainerTwo;

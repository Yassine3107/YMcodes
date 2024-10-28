'use client'

import React, { useEffect, useRef, useState } from 'react';

const Skills = ({cord}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      if(cord > 0.1 && cord <= 0.2) {
    
          setIsVisible(true); 
      } else {
          setIsVisible(false)
      }
      
  }, [cord]);

  const [loading, setLoading] = useState(true);
  const skillsRef = useRef(null);

  const skills = [
    {
      name: "ReactJs",
      perc: 80
    },
    {
      name: "NextJs",
      perc: 75
    },
    {
      name: "Tailwind",
      perc: 75
    },
    {
      name: "NodeJs",
      perc: 70
    },
    {
      name: "mysql",
      perc: 70
    },
    {
      name: "PHP",
      perc: 70
    },
    {
      name: ".NET",
      perc: 65
    },
    {
      name: "CMS",
      perc: 65
    },
  ];

  useEffect(() => {
    const animateLoadingBar = () => {
      const svgPaths = document.querySelectorAll('.loading-bar-path');
      svgPaths.forEach((svgPath) => {
        const length = svgPath.getTotalLength();
        svgPath.style.transition = 'none';
        svgPath.style.strokeDashoffset = length - 35;
        svgPath.getBoundingClientRect();
        svgPath.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        svgPath.style.strokeDashoffset = '0'; 
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && loading) {
          animateLoadingBar();
          setLoading(false);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
<div className={`absolute z-[100] pointer-events-none xs:py-2 top-1/2 right-52 xs:right-14 xs:left-3 min-w-[500px] xs:min-w-[300px] border p-5 bg-black bg-opacity-30 xs:bg-opacity-30 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100 visible' : 'translate-x-[200%] opacity-0 invisible'} -translate-y-1/2`}>

      <div
        ref={skillsRef}
        className="mx-auto relative"
      >
        <h4 className="text-3xl md:text-5xl xs:text-lg dark:text-white font-bold mb-6 xs:mb-2">Skills</h4>
        {skills.map((skill, index) => (
          <div className="mb-2" key={index}>
            <div className="flex flex-row justify-between py-1">
              <span className="text-base text-gray-lite font-semibold text-white xs:text-sm">{skill.name}</span>
              <span className="text-base font-semibold text-gray-lite pr-5 text-white xs:text-sm">{skill.perc}%</span>
            </div>
            <svg className="" viewBox="0 0 100 3" preserveAspectRatio="none">
              <path
                className="loading-bar-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="10px"
                fillOpacity="0"
              ></path>
              <path
                className="loading-bar-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="square"
                stroke="#22c55e"
                strokeWidth="10px"
                fillOpacity="0"
                style={{
                  strokeDasharray: `${skill.perc.toString()}px, 100px`,
                  strokeDashoffset: '0',
                  transition: 'stroke-dashoffset 1.5s ease-in-out',
                }}
              ></path>
            </svg>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 right-0 h-[2px] w-[20rem] bg-white transform translate-y-1/2 translate-x-[100%]"></div>
      <div className="absolute bottom-0 left-1/2 w-[2px] h-screen bg-white transform translate-y-[100%]"></div>

    </div>
  );
};

export default Skills;


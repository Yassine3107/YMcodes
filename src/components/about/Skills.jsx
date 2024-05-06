'use client'

import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
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
      name: "NodeJs",
      perc: 70
    },
    {
      name: "ElectronJs",
      perc: 70
    },
    {
      name: "Tailwind",
      perc: 75
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
    <div
      ref={skillsRef}
      className="mx-auto lgt:p-4 relative"
    >
      <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>
      {skills.map((skill, index) => (
        <div className="mb-2" key={index}>
          <div className="flex flex-row justify-between py-1">
            <span className="text-base text-gray-lite font-semibold text-white">{skill.name}</span>
            <span className="text-base font-semibold text-gray-lite pr-5 text-white">{skill.perc}%</span>
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
              stroke="#3B82F6"
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
  );
};

export default Skills;


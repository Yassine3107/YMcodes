'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setScrollTo } from "@/redux/slices/menuSlice";

const cube = (<svg className="xs:w-[50px]" viewBox="0 0 24 24" class="looka-1j8o68f">
<defs id="SvgjsDefs1752"></defs>
<g id="SvgjsG1753" featurekey="2ou6gm-0" transform="matrix(1, 0, 0, 1, -3, -3)" fill="#ffffff">
 
  <g xmlns="http://www.w3.org/2000/svg" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g fill="#ffffff">
      <path d="M7.2453,4.7573 L11.4413,11.7503 L7.2453,18.7423 L3.5163,11.7503 L7.2453,4.7573 Z M16.0913,4.5003 L20.2913,11.5003 L11.8743,11.5003 L7.6743,4.5003 L16.0913,4.5003 Z M20.9703,11.7793 C20.9723,11.7683 20.9823,11.7613 20.9823,11.7503 C20.9823,11.7383 20.9723,11.7323 20.9703,11.7203 C20.9683,11.6973 20.9613,11.6803 20.9523,11.6583 C20.9473,11.6463 20.9533,11.6333 20.9473,11.6213 L16.4473,4.1213 C16.4413,4.1113 16.4283,4.1113 16.4213,4.1033 C16.4013,4.0763 16.3763,4.0643 16.3463,4.0473 C16.3173,4.0313 16.2943,4.0163 16.2623,4.0123 C16.2513,4.0103 16.2443,4.0003 16.2323,4.0003 L7.2323,4.0003 C7.2193,4.0003 7.2103,4.0123 7.1973,4.0143 C7.1743,4.0183 7.1573,4.0213 7.1363,4.0303 C7.1253,4.0353 7.1143,4.0293 7.1043,4.0353 C7.0943,4.0413 7.0943,4.0543 7.0853,4.0613 C7.0663,4.0753 7.0553,4.0893 7.0413,4.1083 C7.0333,4.1183 7.0183,4.1203 7.0123,4.1323 L3.0123,11.6323 C3.0073,11.6403 3.0133,11.6493 3.0093,11.6573 C2.9963,11.6883 3.0003,11.7163 3.0003,11.7503 C3.0003,11.7833 2.9963,11.8123 3.0093,11.8423 C3.0133,11.8503 3.0073,11.8593 3.0123,11.8673 L7.0123,19.3673 C7.0203,19.3833 7.0353,19.3903 7.0463,19.4033 C7.0563,19.4163 7.0643,19.4253 7.0773,19.4353 C7.0863,19.4443 7.0923,19.4563 7.1033,19.4633 C7.1033,19.4633 7.1033,19.4643 7.1043,19.4643 L7.1043,19.4643 C7.1433,19.4873 7.1873,19.5003 7.2323,19.5003 L16.2323,19.5003 C16.2903,19.5003 16.3423,19.4733 16.3883,19.4363 C16.3993,19.4263 16.4083,19.4183 16.4173,19.4063 C16.4273,19.3963 16.4393,19.3903 16.4473,19.3783 L20.9473,11.8783 C20.9533,11.8663 20.9473,11.8533 20.9523,11.8413 C20.9613,11.8193 20.9683,11.8023 20.9703,11.7793 L20.9703,11.7793 Z"></path>
    </g>
  </g>
</g>
</svg>)

const rocket = (
  <svg  xmlns="http://www.w3.org/2000/svg" className="relative z-[1000]" transform="rotate(45 12 12)"  width="30px" height="30px" viewBox="0 0 24 24" fill="white">
    <rect width="24" height="24" fill="black" />
    
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z"
      fill="white"
    />
  </svg>
);

const paperplane = <svg className="xs:w-[25px]" fill="white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/></svg>

const Navbar = ({cord}) => {
  const [selected, setSelected] = useState("home");
  const [xPos, setXpos] = useState();
  const [yPos, setYpos] = useState();
  const [line, setLine] = useState();
  const [indexOfSelectedItem, setIndexOfSelectedItem] = useState(0);
  const dispatch = useDispatch();


  const menuItems = ["home", "about", "skills", "projects", "contact"];
  
  const dotRefs = useRef([]);

  useEffect(() => {
    const updatePositions = () => {
      if (dotRefs.current.length) {
        const position = dotRefs.current[menuItems.indexOf(selected)].getBoundingClientRect();
        setXpos(position.x - 20)
        setYpos(position.y - 10)
  
        setLine(dotRefs.current[1].getBoundingClientRect().x - dotRefs.current[0].getBoundingClientRect().x)
      }
    };

    updatePositions();

    window.addEventListener('resize', updatePositions)
   
  }, [selected]);

  useEffect(() => {
      console.log("hier")
      var cordRounded = Math.trunc(cord*100)/100;
      console.log(cordRounded)
      if (cordRounded === 0) {
        setSelected("home");
        setIndexOfSelectedItem(0)
      } else if (cordRounded > 0 && cordRounded <= 0.1) {
        setSelected("about");
        setIndexOfSelectedItem(1)
      } else if (cordRounded > 0.1 && cordRounded <= 0.2) {
        setSelected("skills")
        setIndexOfSelectedItem(2)
      } else if (cordRounded > 0.2 && cordRounded <= 0.3) {
        setSelected("projects")
        setIndexOfSelectedItem(3)
      } else if (cordRounded > 0.3 && cordRounded <= 1) {
        setSelected("contact")
        setIndexOfSelectedItem(4)
      } else {
        setSelected("home");
        setIndexOfSelectedItem(0)
      }
    

  },[cord])

  return (
    <div>
      <div className="flex justify-center w-full xs:px-2">
        <div 
          className="relative z-[10] mt-5 cursor-pointer"
           onClick={() => {
            dispatch(setScrollTo(0))
          }}>
          {cube}
        </div>
       { xPos && <div className="absolute w-full">
            <motion.div
              className="absolute text-xl z-[100]"
              animate={{
                x: xPos,
                y: yPos
              }}
              transition={{ type: "spring", stiffness: 300, damping: 60 }}
            >
              {rocket}
            </motion.div>
          </div>}
        <div className="relative grid grid-cols-5 gap-12 p-4 z-[10]">

      {menuItems.map((item, index) => (
        <div key={item} className={`flex flex-col items-center relative  2xl:min-w-[200px]  xl:min-w-[150px] lg:mix-w-[120px]`}>
          <button
                className={`font-semibold mb-10 capitalize  xs:mt-5 ${selected === item ? 'text-white ' : 'text-slate-500 xs:invisible'} ${(indexOfSelectedItem > index) ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-400 transition-all duration-2000' : 'text-slate-500'}`}
                onClick={() => {
                  dispatch(setScrollTo((index/10)))
                }}
          >
            {item}
          </button>

          <div className="flex items-center justify-center relative">
            <span
              ref={(el) => (dotRefs.current[index] = el)}
              className="h-[5px] w-[5px] bg-slate-600 rounded-full relative z-10 "
            ></span>

            {index < menuItems.length - 1 && (
              <span className={`absolute top-1/2 left-[50%] h-[2px] -translate-y-1/2 translate-x-[10px] transition-all duration-500 ${(indexOfSelectedItem > index) ? 'bg-gradient-to-r from-green-500 to-[#2A2722]' : 'bg-slate-600'  }`}
                style={{ width: `${Math.round(line-20)}px` }}
              >
              </span>
            )}
          </div>
        
        </div>
  ))}
        </div>
        
        <div 
          className='relative z-[10] mt-5 cursor-pointer'
          onClick={() => dispatch(setScrollTo((0.4)))}>
            {paperplane}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

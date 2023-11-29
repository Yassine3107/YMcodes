'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useEffect } from 'react';

// ... (your existing imports)

function ScrollProjection() {
  const containerRef = useRef(null);
  const isHovered = useRef(false);
  const navigate = useRouter();

  useEffect(() => {
    // Set the height of the container based on the first image
    const setContainerHeight = () => {
      const firstImage = containerRef.current.querySelector('img');
      if (firstImage) {
        const containerHeight = firstImage.clientHeight;
        containerRef.current.style.height = `${containerHeight}px`;
      }
    };

    // Call the function when the component mounts
    setContainerHeight();

    // Attach a resize event listener to recalculate the height if the window is resized
    window.addEventListener('resize', setContainerHeight);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', setContainerHeight);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    // Auto-scroll smoothly only when the component is hovered
    const autoScroll = () => {

      if (!isHovered.current) {
        container.scrollBy({
          top: container.clientHeight,
          behavior: 'smooth',
        });
      }
      if (!isHovered.current && Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight) {
        container.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    // Auto-scroll every 3 seconds
    const intervalId = setInterval(autoScroll, 3000);

    // Cleanup the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='flex flex-col' onClick={() => {
      navigate.push('https://findiful.com')
    }}>

    
      <div
        ref={containerRef}
        className="overflow-y-auto no-scrollbar m-4 rounded-md cursor-all-scroll brightness-50 hover:brightness-100 shadow-xl hover:shadow-white/100 transition duration-700 ease-in-out lgt:scale-[0.80] hover:scale-[1]"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div className="relative">
          <div className="sticky top-0 items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 aspect-w-16 aspect-h-9">
            <img className="block h-full w-full object-cover" src="/findiful.png" alt="Project 1" />
          </div>
          <div className="sticky top-0 items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 aspect-w-16 aspect-h-9">
            <img className="block h-full w-full object-cover" src="/findiful.png" alt="Project 2" />
          </div>
          <div className="sticky top-0 items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 aspect-w-16 aspect-h-9">
            <img className="block h-full w-full object-cover" src="/findiful.png" alt="Project 3" />
          </div>
          <div className="sticky top-0 items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 aspect-w-16 aspect-h-9">
            <img className="block h-full w-full object-cover" src="/findiful.png" alt="Project 4" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ScrollProjection;


'use client'
import Image from 'next/image';
import { useState } from 'react';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [1, 2, 3, 4, 5];

  return (
    <div className="bg-teal-100 h-screen flex justify-center">
      <div className="max-w-4xl mx-auto relative">
        {slides.map((slide) => (
          <div
            key={slide}
            className={` font-bold text-5xl h-64 flex items-center bg-teal-500 text-white rounded-lg ${
              activeSlide === slide ? 'block' : 'hidden'
            }`}
          >
     
            <Image src='/findiful.png' width={306} height={256}/>
          </div>
        ))}

        <div className="absolute inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={() =>
                setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1)
              }
            >
              &#8592;
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -mr-6"
              onClick={() =>
                setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1)
              }
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="absolute w-full flex items-center justify-center px-4">
          {slides.map((slide) => (
            <button
              key={slide}
              className={`flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg ${
                activeSlide === slide ? 'bg-orange-600' : 'bg-teal-300'
              }`}
              onClick={() => setActiveSlide(slide)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from 'react';


const swipe = (<svg fill="#334155" width="40px" height="30px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1000 1000" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"> <path d="M2309.8,4574L1865.7,4130l114.8-114.8l114.8-114.8l248.8,248.8l248.8,248.8V2746.1V1094.3l158.9,5.7l157,5.7l5.7,1636.5l3.8,1636.5l239.3-239.3l239.3-239.3l118.7,120.6l120.6,118.7L3196,4579.8L2755.8,5020L2309.8,4574z"></path> <path d="M1936.5,3379.6c-7.7-5.7-13.4-748.4-13.4-1649.9V91.3l-245,245l-243.1,243.1l-114.8-114.8l-114.8-114.8l446-446l444.1-444.1l444.1,444.1l446,446l-120.6,118.7l-118.7,120.6l-248.8-248.8L2248.5,91.3v1651.8V3393h-149.3C2016.9,3393,1942.3,3387.3,1936.5,3379.6z"></path> <path d="M4861.2,2541.3L4555,2365.2L4545.4,654l-9.6-1711.2l-245,426.8l-246.9,424.9h-375.2h-377.1l-189.5-327.3l-187.6-325.4l122.5-214.4c67-118.7,216.3-375.2,329.2-574.2l206.7-357.9l93.8-455.5l95.7-453.6l553.2-555.1l555.1-555.1v-379V-4780h162.7h162.7v444.1v446l-566.6,566.6l-566.6,566.6l-90,438.3l-91.9,438.3l-289,501.5c-160.8,275.6-290.9,511.1-290.9,522.5c0,11.5,40.2,90,88,174.2l88.1,153.1l191.4-5.7l191.4-5.7l501.5-867.1l499.6-867.1l5.7,2226l5.7,2226.1l160.8,91.9l162.7,90l162.7-90l162.7-91.9V824.4V-530.8h162.7H5847v331.1v329.2l162.7,91.9c90,51.7,170.4,90,178,86.1c7.7-3.8,80.4-42.1,162.7-88l147.4-82.3v-335v-333.1h162.7h160.8l5.7,231.6l5.7,233.5l162.7,91.9l160.8,91.9l172.3-91.9l170.3-91.9l-3.8-233.5l-3.8-231.6h162.7h164.6v168.4v166.5l157,86.1c86.1,47.9,164.6,84.2,174.2,80.4c9.6-1.9,86.1-44,168.4-91.9l151.2-88.1V-1193v-983.8l-325.4-867.1l-325.4-869v-432.6V-4780h162.7h162.7v402v402l325.4,867.1l325.4,869v1108.2V-23.6l-327.3,189.5L8140,353.5l-90-49.8c-47.9-28.7-124.4-70.8-170.3-93.8l-82.3-40.2l-321.6,158.9l-321.6,160.8l-155-88c-86.1-49.8-162.7-90-170.4-90c-7.7,0-84.2,42.1-168.4,91.9c-84.2,51.7-227.8,135.9-317.7,189.5l-164.6,97.6l-160.8-93.8l-160.8-91.9L5847,1433l-9.6,930.2l-306.3,178c-168.4,99.5-319.7,179.9-335,179.9C5180.9,2719.3,5029.7,2638.9,4861.2,2541.3z"></path> </g> </g> </g></svg>)
const scroll = (<svg width="40px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9V15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15V9ZM11.25 2.79454C8.15183 3.16505 5.75 5.80204 5.75 9V15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15V9C18.25 5.80204 15.8482 3.16505 12.75 2.79454V6.37803C13.6239 6.68691 14.25 7.52034 14.25 8.5V10.5C14.25 11.7426 13.2426 12.75 12 12.75C10.7574 12.75 9.75 11.7426 9.75 10.5V8.5C9.75 7.52034 10.3761 6.68691 11.25 6.37803V2.79454ZM12 7.75C11.5858 7.75 11.25 8.08579 11.25 8.5V10.5C11.25 10.9142 11.5858 11.25 12 11.25C12.4142 11.25 12.75 10.9142 12.75 10.5V8.5C12.75 8.08579 12.4142 7.75 12 7.75Z" fill="#334155"></path> </g></svg>)

function BounceScrollSwipe() {
    const [isScrolling, setIsScrolling] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsScrolling(prev => !prev);
      }, 5000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
    <div className="flex items-center justify-center text-white fixed bottom-3 left-0 right-0"> 
        <div className="w-8 h-[2px] bg-slate-700"></div>
        <div>
            <div className="animate-bounce mx-2">
              {isScrolling ? swipe : scroll}
            </div>
            <span className="mx-2 text-sm text-center text-slate-700"> {isScrolling ? 'Swipe' : 'Scroll'}</span>
        </div>
        <div className="w-8 h-[2px] bg-slate-700"></div>
      </div>
    );
  }

export default BounceScrollSwipe
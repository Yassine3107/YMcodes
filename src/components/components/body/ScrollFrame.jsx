import { useDispatch, useSelector } from "react-redux";
import { setMove, setScrollTo } from "@/redux/slices/menuSlice";
import React, { useEffect, useRef } from "react";

export default function ScrollFrame({ onScrollChange }) {
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();
  const scrollTo = useSelector((state) => state.menu.scrollTo);

  const scrollToPosition = (scrollPercentage) => {
    
    const scrollableHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
    const newScrollTop = scrollableHeight * scrollPercentage;

    scrollContainerRef.current.scrollTo({
      top: newScrollTop,
      behavior: 'smooth', 
    });
  };

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollTop;
    const scrollableHeight = event.target.scrollHeight - event.target.clientHeight;
    let normalizedScroll = scrollPosition / scrollableHeight;
    normalizedScroll = normalizedScroll;
    const smoothedScroll = Math.min(Math.max(normalizedScroll, 0), 1);
    dispatch(setMove(smoothedScroll));    
  };

  useEffect(() => {
    if (scrollTo !== null) {
      scrollToPosition(scrollTo);
    }  
  }, [scrollTo])


  return (
    <div
      ref={scrollContainerRef}
      className="max-h-screen w-full overflow-y-auto relative top-[-10px] z-[10] no-scrollbar"
      onScroll={handleScroll}
    >
      
      <p className="h-[8000px]">
      </p>
    </div>
  );
}

import { useEffect } from 'react';

export default function ScrollFrame({ onScrollChange }) {
  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollTop; // This is the vertical scroll position of the div

    // Get the total scrollable height of the div
    const scrollableHeight = event.target.scrollHeight - event.target.clientHeight;

    // Normalize the scroll position between 0 and 1
    let normalizedScroll = scrollPosition / scrollableHeight;

    // Slow down the scroll movement (10 times slower)
    normalizedScroll = normalizedScroll ;
    console.log(normalizedScroll)
    // Ensure the value stays between 0 and 1
    const smoothedScroll = Math.min(Math.max(normalizedScroll, 0), 1); // Clamps between 0 and 1
    console.log(smoothedScroll)
    // Call the parent callback to update the scroll value
    onScrollChange(smoothedScroll);
  };

  return (
    <div 
    className="max-h-screen w-full overflow-y-auto relative top-[-10px] z-[10] no-scrollbar" // Add 'no-scrollbar' class
    onScroll={handleScroll} 
    >
    <p className="h-[10000px]"> </p>
    </div>

  );
}

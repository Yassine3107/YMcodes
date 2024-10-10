import React, {useState, useEffect} from 'react'

function Who({cord}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(cord > 0 && cord < 0.1) {
            setIsVisible(true); 
        } else {
            setIsVisible(false)
        }
        
    }, [cord]);

  return (
    <div className={`absolute top-1/2 left-52 transform -translate-y-1/2 max-w-[500px] border p-5 bg-black bg-opacity-90 transform transition-transform duration-700 ${
        isVisible ? 'translate-x-0' : '-translate-x-[200%]'
      }`}>
        <h4 className="text-2xl text-white">Who is <span>YMcodes</span>?</h4>
        <p className="text-white relative z-[103]">Nacho Vazquez (aka naxodev) is a software engineer, consultant, scuba diver, indie hacker, OSS maintainer, tech writer, streamer, parent, and human born in Cuba.</p>
        <div className="absolute top-1/2 left-0 h-[2px] w-[20rem] bg-white transform translate-y-1/2 -translate-x-[100%]"></div>
    </div>
  )
}

export default Who
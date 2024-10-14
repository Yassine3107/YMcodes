import React, {useState, useEffect} from 'react'

function Who({cord}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(cord > 0 && cord <= 0.1) {
            setIsVisible(true); 
        } else {
            setIsVisible(false)
        }
    }, [cord]);

  return (
    <div className={`absolute top-1/2 left-52 xs:left-20 transform -translate-y-1/2 max-w-[500px] border p-5 bg-black bg-opacity-90 transform transition-transform duration-700 ${
        isVisible ? 'translate-x-0' : '-translate-x-[250%] hidden'
      }`}>
        <h4 className="text-2xl text-white mb-2">Who is <span>YMcodes</span>?</h4>
        <p className="text-white text-sm relative z-[103]">Welcome to the cube-driven digital landscape. I craft seamless websites, desktop apps, and applications that bring visions to life.</p>        <div className="absolute top-1/2 left-0 h-[2px] w-[20rem] bg-white transform translate-y-1/2 -translate-x-[100%]"></div>
    </div>
  )
}

export default Who
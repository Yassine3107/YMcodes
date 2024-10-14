import React, {useState, useEffect} from 'react'
import BounceScrollSwipe from './BounceScrollSwipe';
import { useDispatch } from 'react-redux';
import { setScrollTo } from '@/redux/slices/menuSlice';


const logo = <svg className='w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[1000px] mx-auto' viewBox="0 0 369.89473684210526 84.51161215331612" class="looka-1j8o68f"><defs id="SvgjsDefs1752"></defs><g id="SvgjsG1753" featurekey="2ou6gm-0" transform="matrix(5.121915888079765,0,0,5.121915888079765,-15.36431035902721,-20.48919977148372)" fill="#ffffff"><title xmlns="http://www.w3.org/2000/svg">geo-1</title><desc xmlns="http://www.w3.org/2000/svg">Created with Sketch.</desc><g xmlns="http://www.w3.org/2000/svg" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#ffffff"><path d="M7.2453,4.7573 L11.4413,11.7503 L7.2453,18.7423 L3.5163,11.7503 L7.2453,4.7573 Z M16.0913,4.5003 L20.2913,11.5003 L11.8743,11.5003 L7.6743,4.5003 L16.0913,4.5003 Z M20.9703,11.7793 C20.9723,11.7683 20.9823,11.7613 20.9823,11.7503 C20.9823,11.7383 20.9723,11.7323 20.9703,11.7203 C20.9683,11.6973 20.9613,11.6803 20.9523,11.6583 C20.9473,11.6463 20.9533,11.6333 20.9473,11.6213 L16.4473,4.1213 C16.4413,4.1113 16.4283,4.1113 16.4213,4.1033 C16.4013,4.0763 16.3763,4.0643 16.3463,4.0473 C16.3173,4.0313 16.2943,4.0163 16.2623,4.0123 C16.2513,4.0103 16.2443,4.0003 16.2323,4.0003 L7.2323,4.0003 C7.2193,4.0003 7.2103,4.0123 7.1973,4.0143 C7.1743,4.0183 7.1573,4.0213 7.1363,4.0303 C7.1253,4.0353 7.1143,4.0293 7.1043,4.0353 C7.0943,4.0413 7.0943,4.0543 7.0853,4.0613 C7.0663,4.0753 7.0553,4.0893 7.0413,4.1083 C7.0333,4.1183 7.0183,4.1203 7.0123,4.1323 L3.0123,11.6323 C3.0073,11.6403 3.0133,11.6493 3.0093,11.6573 C2.9963,11.6883 3.0003,11.7163 3.0003,11.7503 C3.0003,11.7833 2.9963,11.8123 3.0093,11.8423 C3.0133,11.8503 3.0073,11.8593 3.0123,11.8673 L7.0123,19.3673 C7.0203,19.3833 7.0353,19.3903 7.0463,19.4033 C7.0563,19.4163 7.0643,19.4253 7.0773,19.4353 C7.0863,19.4443 7.0923,19.4563 7.1033,19.4633 C7.1033,19.4633 7.1033,19.4643 7.1043,19.4643 L7.1043,19.4643 C7.1433,19.4873 7.1873,19.5003 7.2323,19.5003 L16.2323,19.5003 C16.2903,19.5003 16.3423,19.4733 16.3883,19.4363 C16.3993,19.4263 16.4083,19.4183 16.4173,19.4063 C16.4273,19.3963 16.4393,19.3903 16.4473,19.3783 L20.9473,11.8783 C20.9533,11.8663 20.9473,11.8533 20.9523,11.8413 C20.9613,11.8193 20.9683,11.8023 20.9703,11.7793 L20.9703,11.7793 Z"></path></g></g></g><g id="SvgjsG1754" featurekey="kZnDdN-0" transform="matrix(2.767705282563852,0,0,2.767705282563852,110.33937709441064,4.058016938954745)" fill="#ffffff"><path d="M12.7 6 l-5.22 7.54 l0 6.46 l-1.66 0 l0 -6.46 l-5.22 -7.54 l1.9 0 l4.14 6.02 l4.16 -6.02 l1.9 0 z M29.08 6 l0 14 l-1.7 0 l0 -10.28 l-4.92 10.28 l-1.36 0 l-4.9 -10.26 l0 10.26 l-1.7 0 l0 -14 l1.64 0 l5.66 11.72 l5.64 -11.72 l1.64 0 z M43.04 18.5 c-1.28 1.1 -2.9 1.7 -4.7 1.7 c-3.64 0 -7.16 -2.96 -7.16 -7.2 s3.52 -7.2 7.16 -7.2 c1.78 0 3.38 0.6 4.64 1.66 l-1.02 1.16 c-0.98 -0.78 -2.24 -1.24 -3.5 -1.24 c-2.86 0 -5.56 2.32 -5.56 5.62 s2.7 5.62 5.56 5.62 c1.28 0 2.56 -0.48 3.54 -1.28 z M51.800000000000004 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M51.800000000000004 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z M65.22 6 c4.08 0 7.08 3.1 7.08 7 s-3 7 -7.08 7 l-4.16 0 l0 -14 l4.16 0 z M65.2 18.42 c3.34 0 5.4 -2.42 5.4 -5.42 s-2.06 -5.42 -5.4 -5.42 l-2.48 0 l0 10.84 l2.48 0 z M75.96 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M89.02 5.76 c2.18 0 3.78 1.44 4.38 2.94 l-1.26 0.68 c-0.64 -1.28 -1.66 -2.12 -3.12 -2.12 c-1.54 0 -2.6 0.88 -2.6 2.1 c0 1.14 0.72 1.86 2.24 2.44 l1.02 0.38 c2.52 0.94 4.1 2.02 4.1 4.24 c0 2.4 -2.3 3.88 -4.68 3.88 s-4.34 -1.44 -4.88 -3.44 l1.34 -0.64 c0.48 1.48 1.74 2.56 3.54 2.56 c1.6 0 2.96 -0.92 2.96 -2.34 c0 -1.6 -1.12 -2.2 -2.78 -2.84 l-1.04 -0.4 c-2.12 -0.8 -3.48 -1.9 -3.48 -3.88 c0 -2.04 1.8 -3.56 4.26 -3.56 z"></path></g></svg>

function HomePage({cord}) {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if(cord === 0) {
        setIsVisible(true); 
    } else {
        setIsVisible(false)
    }
    
}, [cord]);

  return (
    
    <div className="absolute inset-0 flex flex-col justify-between mt-36">
      {isVisible ? <div className="flex flex-col items-center ">
     
          <div className=" flex flex-col z-[0] pointer-events-none ">
              <h1 className="py-6 text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">In the realm of cubes, I create clarity through code.</h1>
                <div className=''>
                  {logo}
                </div>
              <h4 className="text-5xl text-center mt-10">Software Developer</h4>
              <div className="relative">
              </div>
            {/* <Canvas>
              <Model rotation={rotation} />
            </Canvas> */}
          </div>
          <button 
            className='z-[101] border-2 border-slate-700 hover:border-1 hover:bg-gradient-to-r from-green-500 to-lime-400 text-white py-2 px-3 rounded-full mt-6 pointer-events-auto bring-front'
            onClick={() => dispatch(setScrollTo((0.4)))}>
            Contact Me
          </button>
        </div>:<div></div>}
        <BounceScrollSwipe/>
    </div>
  )
}

export default HomePage
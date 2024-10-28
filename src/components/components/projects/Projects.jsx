import React, {useState, useEffect} from 'react'
import Tech from './Tech';

const projects = [
  { image: '/ex-findiful.png', alt: 'findiful', title: 'Findiful', tech: ['NodeJs', 'ElectronJs', 'React', 'Firebase', 'Stripe'], website: 'https://findiful.com', description:"Findiful is an app designed for eCommerce entrepreneurs to spy on competitors and find winning products. It helps users discover trending items, analyze market trends, and identify profitable opportunities, giving them a competitive edge in the eCommerce market.",},
  { image: '/ex-epc247.png', alt: 'epc247', title: 'EPC247',tech: ['NextJs',  'tailwind', 'Firebase', 'Strapi CMS'], website: 'https://epc247.be', description:"This app makes it easy for users to get in touch for all things related to EPC and asbestos attestations. Whether you need an inspection or have questions, the app offers direct access to expert guidance and services, simplifying the process for homeowners and businesses alike."},
  { image: '/ex-naturesglitch.png', alt: 'naturesglitch', title: 'Natures Glitch', tech: ['NextJs', 'NodeJs', 'Tailwind', 'CMS', 'nginx', 'mysql'], website: null, description:"This website is your go-to resource for natural healing remedies. It offers valuable insights and tips on how to use nature’s own solutions for a wide range of health concerns, promoting wellness through holistic methods. Whether you're exploring herbal remedies, natural therapies, or lifestyle tips, you'll find practical advice to support your journey to better health."},
  { image: '/ex-nightshop.png', alt: 'nsapp', title: 'Nightshop App', tech: ['NextJs', 'Tailwind', 'Google maps API'], website: 'https://stingray-app-3ozgo.ondigitalocean.app', description:"This app makes it easy to order from your local nightshop and have items delivered straight to your door. Whether it's snacks, drinks, or essentials, you can place an order anytime and enjoy quick, convenient delivery right to your home."},
  { image: '/ex-taxirover.png', alt: 'taxirover', title: 'Taxi Rover', tech: ['React', 'NextJs', 'Tailwind', 'wordpress'], website: null, description:"This taxi service app allows you to book various taxi options quickly and easily. Whether you need a ride across town, to the airport, or want important documents transported, you can choose the service that fits your needs and get a reliable ride in just a few taps."},
];


function Projects({cord}) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageFullscreen, setImageFullscreen] = useState(false);

    useEffect(() => {
        if(cord > 0.2 && cord <= 0.3) {
            setIsVisible(true); 
        } else {
            setIsVisible(false)
        }
        
    }, [cord]);

  return (
    <div className={`absolute z-[100] pointer-events-none top-1/2 left-0 right-0 transform -translate-y-1/2 max-w-[60rem] mx-auto border py-5 pl-5 bg-black bg-opacity-60 transition-transform duration-700 mx-3 ${
      isVisible ? 'translate-x-0 opacity-100 visible' : '-translate-y-[250%] opacity-0 invisible'
    }`}>
        {
          <div className="grid grid-flow-col">
            <div className="grid">
              <h4 className={`text-3xl mb-4`}>{selectedProject.title}</h4>
              <p className="text-xs text-justify max-w-[400px]">{selectedProject.description}</p>
              <div className='grid grid-cols-2 poniter-events-none'>
                <Tech techs={selectedProject.tech}/>
                <img 
                 className={`cursor-pointer transition-all duration-1000 ease-in-out xs:pointer-events-auto hidden xs:block ${
                  imageFullscreen
                    ? "fixed inset-0 w-full h-full object-contain z-50" 
                    : "max-h-[600px] max-w-[900px] w-full smt:max-h-[250px] smt:min-h-[210px] object-cover self-center" 
                }`}
                src={selectedProject.image} 
                alt={selectedProject.alt}
                onClick={() => setImageFullscreen(!imageFullscreen)}/>
              </div>
              
            </div>
            <img 
                 className={`cursor-pointer transition-all duration-500 xs:pointer-events-auto xs:hidden ${
                  imageFullscreen
                    ? "fixed inset-0 w-full h-full object-contain z-50"
                    : "max-h-[600px] max-w-[900px] w-full smt:max-h-[250px] smt:min-h-[210px] object-cover self-center"
                }`}
                src={selectedProject.image} 
                alt={selectedProject.alt}
                onClick={() => setImageFullscreen(!imageFullscreen)}/>
            
            <div className="flex flex-col gap-2 xs:ml-2">
              {projects.map((project, index) => (
                <span key={index} className="group pointer-events-auto relative z-[101] inline-flex items-center text-xs h-[50px] cursor-pointer" onClick={() => {setSelectedProject(project); setSelectedIndex(index)}}>
                  <span className={`pr-1 mr-2 w-[10px] font-bold ${selectedIndex === index ? 'text-white' : 'text-slate-600'}`}>{index + 1}</span>
                  <span className={`absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-lime-400 to-green-500 opacity-0 text-red-500 ${selectedIndex === index ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-300 -mr-[1px]`}></span>
                </span> 
                ))
              }
              </div>
          </div>
        }
        <div className="absolute top-1/2 left-0 h-[2px] w-[20rem] bg-white transform translate-y-1/2 -translate-x-[100%]"></div>
        <div className="absolute top-1/2 right-0 h-[2px] w-[20rem] bg-white transform translate-y-1/2 translate-x-[100%]"></div>
    </div>
  )
}

export default Projects
import React, {useState, useEffect} from 'react'
import Tech from './Tech';

const projects = [
  { image: '/ex-findiful.png', alt: 'findiful', title: 'Findiful', tech: ['NodeJs', 'ElectronJs', 'React', 'Firebase', 'Stripe'], website: 'https://findiful.com', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",},
  { image: '/ex-epc247.png', alt: 'epc247', title: 'EPC247',tech: ['NextJs', 'Styled Components', 'tailwind', 'Firebase', 'Strapi CMS'], website: 'https://epc247.be', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  { image: '/ex-naturesglitch.png', alt: 'naturesglitch', title: 'Natures Glitch', tech: ['NextJs', 'NodeJs', 'Tailwind', 'CMS', 'nginx', 'mysql'], website: null, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  { image: '/ex-nightshop.png', alt: 'nsapp', title: 'Nightshop App', tech: ['NextJs', 'Tailwind', 'Google maps API', 'IN PROGRESS...'], website: 'https://stingray-app-3ozgo.ondigitalocean.app', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
  { image: '/ex-taxirover.png', alt: 'taxirover', title: 'Taxi Rover', tech: ['React', 'NextJs', 'Tailwind', 'wordpress'], website: null, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
];


function Projects({cord}) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleSelectProject = (index) => {
      setSelectedProject(index);
    };

    
    useEffect(() => {
        if(cord > 0.2 && cord < 0.3) {
            setIsVisible(true); 
        } else {
            setIsVisible(false)
        }
        
    }, [cord]);

  return (
    <div className={`absolute z-[100] pointer-events-none top-1/2 left-0 right-0 transform -translate-y-1/2 max-w-[60rem] mx-auto border py-5 pl-5 bg-black bg-opacity-90 transform transition-transform duration-700 mx-3 ${
        isVisible ? 'translate-x-0' : '-translate-y-[250%]'
      }`}>
        {
            <div className="grid grid-flow-col">
              <div className="">
                <h4 className="text-3xl mb-4">{selectedProject.title}</h4>
                <p className="text-xs text-justify max-w-[400px]">{selectedProject.description}</p>
                <Tech techs={selectedProject.tech}/>
              </div>
              <img className='max-h-[600px] max-w-[900px] w-full smt:max-h-[250px] smt:min-h-[210px] object-cover self-center' 
                  src={selectedProject.image} alt={selectedProject.alt}/>
              <div>
                
              </div>
              <div className="flex flex-col gap-2">
                {projects.map((project, index) => (
                  <span className="group pointer-events-auto relative z-[101] inline-flex items-center text-xs h-[50px] cursor-pointer" onClick={() => {setSelectedProject(project); setSelectedIndex(index)}}>
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
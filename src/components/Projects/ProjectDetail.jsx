import React from 'react'
import Title from '../common/Title'
import PrimaryButton from '../common/PrimaryButton'

function ProjectDetail({project}) {
    console.log(project)
  return (
    <div className='relative mt-20 pl-5 min-h-screen'>
    <div className='flex smt-1130:flex-col mt-[200px] max-w-7xl mx-auto'>
        <div className='lgt-1130:w-1/3 smt-1130:mx-auto'>
            <h1 className='text-4xl font-bold mb-8 w-fit'>Project: {project.defaultText}</h1>
            <span className='block mb-1 font-semibold text-3xl'>Used Technologies</span>
            <ol className='list-decimal list-inside mb-10'>
                {
                    project.tech.map((technology) => (
                        <li className='text-xl'>{technology}</li>
                    ))
                }
            </ol>
            
            {project.website && 
            <a className={`smt-1130:hidden cyberpunk-button text-xl font-bold relative z-50 border-2 border-[#3B82F6] text-[#3B82F6] hover:text-white py-3 px-8 transition-all duration-300  shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 cursor-pointer`}   
             href={project.website} target='_blank'>
                Check website
            </a>
            }
        </div>
        <div className='lgt-1130:w-2/3 smt-1130:mx-auto'>
            <div className="relative w-full rounded">
                <div className="rounded-lg w-full">
                    <img className='max-h-[600px] max-w-[900px] w-full smt:max-h-[250px] smt:min-h-[210px] object-cover' 
                    src={project.image} alt={project.alt}/>
                </div>
            </div>
        </div>
        <a className={`lgt-1130:hidden text-center mt-8 w-fit mx-auto cyberpunk-button text-xl font-bold relative z-50 border-2 border-[#3B82F6] text-[#3B82F6] hover:text-white py-3 px-8 transition-all duration-300  shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100 cursor-pointer`}   
             href={project.website} target='_blank'>
                Check website
        </a>
    </div>
</div>

  )
}

export default ProjectDetail
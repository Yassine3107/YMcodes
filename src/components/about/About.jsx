import React from 'react'
import Skills from './Skills'
import Image from 'next/image'
import Title from '../common/Title'
import Info from './Info'
import NeonButton from '../common/NeonButton'
import SkillLogos from '../visuals/SkillLogos'

function About() {
  return (
    <div id='more' className='flex flex-col min-h-screen relative justify-evenly mt-16'>
      <div className='flex flex-row smt-1100:flex-col w-5/6 mx-auto'>
        
        <div className='flex-1'>
          <Skills />
        </div>
        <div className='flex-1 flex justify-center items-center p-8 smt:p-2 smt:mt-8'>
          <Info/>
          {/* <Image
            src='/brainblue.png'
            width={300}
            height={300}
            layout='responsive'
            className='rounded-lg transform scale-x-[-1]' // Add any additional styling here
            style={{ maxWidth: '70%' }} // Set the maximum width
          /> */}
        </div>
      </div>
      <SkillLogos/>
      <div className='flex justify-center mx-auto relative smt-1400:hidden z-[61]'>
        <NeonButton section="projects" text="Projects"/>
      </div>
    </div>

  )
}

export default About
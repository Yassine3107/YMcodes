import React from 'react'
import Hologram from './Hologram'
import Typewriter from '../common/TypeWriter'
import Info from './Info'
import Title from '../common/Title'
import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'
import NeonButton from '../common/NeonButton'

function Hero() {
  return (
    <div id='about' className='flex flex-col justify-evenly min-h-screen smt:mt-[100px]'>
      <div className='grid grid-rows-2 2xl:flex 2xl:flex-row justify-center w-5/6 mx-auto relative items-center'>
          <div className='flex flex-col 2xl:flex-1'>
            {/* <Typewriter/> */}
            <Info/>
            <div className='p-8 smt:pb-0 smt:flex smt:flex-col '>
              <PrimaryButton pushTo="projects" text='Projects'/>
              <SecondaryButton pushTo="contact" text='Contact'/>
            </div>
          </div>
          <div className='2xl:flex-1 lgt:mr-8' style={{zIndex: 60}}>
            <Hologram/>
          </div>
      </div>
      <div className='flex justify-center mx-auto relative smt-1400:hidden z-[61]'>
        <NeonButton text="MORE" section="more"/>
      </div>
    </div>
  )
}

export default Hero
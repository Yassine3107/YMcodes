import React from 'react'
import Slider from './Slider'
import Image from 'next/image'

function ProjectThumbnail() {
  return (
    <div className="relative mx-8 my-8 hover:z-10">
        <div className="relative transform transition-transform duration-300 ease-in-out hover:scale-200">
            <Image src={'/findiful.png'} width={306} height={306}/>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 via-purple-700 to-pink-500 bg-opacity-80 text-white opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
            <h3 className="text-lg font-semibold">Findiful</h3>
            <Slider/>
            <p className="text-sm text-white"></p>
            </div>
        </div>
    </div>

  )
}

export default ProjectThumbnail
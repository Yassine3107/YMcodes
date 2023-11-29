import NeonButtonTeleport from '@/components/common/NeonButtonTeleport'
import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col mt-[120px] justify-center mx-auto relative h-screen'>
        <h1 className='text-2xl text-white text-center'>Seems like you have entered a blackhole.</h1>
        <div className='flex justify-center mt-[30px]'>
            <NeonButtonTeleport text="Teleport back" page="/" className="text-center"/>
        </div>
        <span className='text-white text-center mt-8'>&#x2191; Click to teleport &#x2191;</span>
        
    </div>
  )
}

export default NotFound
import React from 'react'
import Title from '../common/Title'
import ScrollProjection from './ScrollProjection'

function ProjectsContainer() {
  return (
    <div className='flex flex-col w-5/6 mx-auto relative'>
        <Title title={'Projects'}/>
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4 h-5/6'>      
            <ScrollProjection/>
            <ScrollProjection/>
            <ScrollProjection/>
        </div>
    </div>

  )
}

export default ProjectsContainer
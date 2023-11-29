import React from 'react'

function Title(props) {
  return (
    <h2 className="text-center text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6 mb-8">
        <span className="block">
            
            <span className="bg-clip-text text-white">
                {props.title}
            </span>
        
        </span>
    </h2>
  )
}

export default Title
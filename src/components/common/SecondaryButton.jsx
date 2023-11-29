'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function SecondaryButton(props) {
  const router = useRouter();
  return (

    <button 
    className="cyberpunk-secondary-button font-bold text-xl relative z-50 border-2  border-white text-white py-3 px-8 lgt:mx-6 smt:my-4 transition-all duration-300 shadow-lg shadow-white/50 hover:shadow-white/100"
    onClick={() => {
      router.push(`#${props.pushTo}`)
    }}>
        {props.text}
    </button>
  )
}

export default SecondaryButton
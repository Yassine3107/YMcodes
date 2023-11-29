'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function PrimaryButton(props) {
  const router = useRouter();

  return (
    <button className={`${props.className} cyberpunk-button text-xl font-bold relative z-50 border-2 border-[#3B82F6] text-[#3B82F6] hover:text-white py-3 px-8 transition-all duration-300  shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100`}   
    onClick={() => {
      router.push(`#${props.pushTo}`)
    }}>
        {props.text}
    </button>
  )
}

export default PrimaryButton
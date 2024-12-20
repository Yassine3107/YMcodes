import React from 'react'

function SentSuccess() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto text-center'>
        <svg className='w-[150px] xs:w-[100px]' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fill="#22c55e" fill-rule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"></path>
            </g>
        </svg>
        <h2 className='text-xl my-8'>Thanks, your message was sent successfully!</h2>
    </div>
  )
}

export default SentSuccess
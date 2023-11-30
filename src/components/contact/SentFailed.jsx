import React from 'react'

function SentFailed() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto text-center'>
        <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <h2 className='text-xl'>Oops, your message could not be sent..</h2>
        <h2 className='text-md mb-8 mt-2'>Send a mail to <a className='text-[#3B82F6]' href='mailto:yassine.moumouh@hotmail.com'>yassine.moumouh@hotmail.com</a></h2>
    </div>
  )
}

export default SentFailed
import React from 'react'


function InputArea({title, placeholder}) {
  return (
    <div>
        <label className="block text-xs font-bold text-gray-600 mt-3 gap-2">{title}</label>
        <div className="relative mt-1 mr-3">
        <textarea rows={3}
            className="z-[100] pointer-events-auto text-xs  bg-black bg-opacity-60 appearance-none block w-full text-white border focus:outline-none rounded shadow-sm focus:border-green-500 py-3 px-4 mb-3 leading-tight " placeholder='Your message...'></textarea>            
            <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
            </span>
        </div>
    </div>
  )
}

export default InputArea
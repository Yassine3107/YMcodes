import React from 'react'


function InputField({title, placeholder, logo, update}) {
  return (
    <div className="">
        <label className="block text-xs font-bold text-gray-600 mt-3 gap-2">{title}</label>
        <div className="relative mt-1 mr-3">
            <input onChange={(e) => update(e.target.value)} type="email" id="input-6" className="z-[100] pointer-events-auto bg-black bg-opacity-60 text-white block w-full py-1 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-green-500 " placeholder={placeholder}/>
            <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                {logo}
            </span>
        </div>
    </div>
  )
}

export default InputField
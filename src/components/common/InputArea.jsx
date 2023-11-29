import React, { useState } from 'react'

function InputArea(props) {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        const text = e.target.value;
        setText(text);
    
        props.onFormChange(text);
      };
  return (
    <div className="bg-black p-4 smt:px-1">
        <div className="relative bg-inherit">
            <textarea type="text" id="username" name="username" 
                placeholder={props.placeholder}
                onChange={handleInputChange}
                className="peer bg-transparent w-full h-[85px] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-[#3B82F6] focus:outline-none focus:border-rose-600 p-4"/>
                <label htmlFor="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#3B82F6] peer-focus:text-lg transition-all">{props.placeholder}</label>
        </div>
    </div>    
)
}

export default InputArea
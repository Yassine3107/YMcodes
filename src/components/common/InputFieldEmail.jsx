'use client'

import React, { useState } from 'react';

function InputFieldEmail(props) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(input));
  };

  const handleInputChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);

    props.onFormChange(newEmail);
  };

  return (
    <div className="bg-black p-4 smt:px-1">
      <div className="relative bg-inherit">
        <input
          type="text"
          id="email"
          name="email"
          placeholder={props.placeholder}
          onChange={handleInputChange}
          className={`peer bg-transparent p-4 text-sm rounded-lg w-full text-gray-200 placeholder-transparent ring-2 ring-gray-500 focus:ring-[#3B82F6] focus:outline-none focus:border-rose-600 ${isValid && "ring-green-500 focus:ring-green-500"} `}
        />
        <label htmlFor="email" className={`absolute cursor-text left-0 -top-3 text-md text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#3B82F6] peer-focus:text-lg ${isValid && "peer-focus:text-green-500"} transition-all`}>{props.placeholder}</label>

        {isValid && (
          <span className="absolute right-2 text-green-500 top-0 bottom-0">
            <svg width="30px" height="30x" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.8086 9.70558C18.1983 9.31421 18.1969 8.68105 17.8056 8.29137C17.4142 7.90169 16.781 7.90305 16.3913 8.29442L10.6215 14.0892L7.30211 10.816C6.90886 10.4283 6.27571 10.4327 5.88793 10.8259C5.50015 11.2192 5.50459 11.8524 5.89784 12.2401L9.92581 16.212C10.3177 16.5985 10.9482 16.5956 11.3366 16.2056L17.8086 9.70558Z" fill="#16c537"></path> <path fillRule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="#16c537"></path> </g></svg>          </span>
        )}
        
      </div>
      {!isValid && (
          <p className={`mt-2 text-pink-600 text-sm ${(isValid !== true && isValid === null ) && 'hidden'}`}>
            Please provide a valid email address.
          </p>
        )}
    </div>
  );
}

export default InputFieldEmail;

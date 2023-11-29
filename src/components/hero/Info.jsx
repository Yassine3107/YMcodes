'use client'

import React from 'react'
import Typewriter from 'typewriter-effect';


function Info() {
  return (
    <div className='lgt:mt-[100px] smt:mt-[30px] lgt:p-8'>
        <div className='mb-2'><strong className='text-blue-500 text-xl'>HELLO, I AM YASSINE.</strong></div>
        <h2 className='text-5xl smt:text-4xl font-bold md:text-left mb-5'>
            I Build Websites and More
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello, I am')
                    .callFunction(() => {
                    console.log('String typed out!');
                    }).start();
                }}
            /> */}
        </h2>
        <h3 className='text-2xl font-bold text-center'>
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Passionate Developer | Creative Problem Solver | Tech Enthusiast')
                    .callFunction(() => {
                    console.log('String typed out!');
                    }).start();
                }}
            /> */}
        </h3>
        <p className='mb-3 text-xl text-justify'>
        Welcome to my corner of the digital realm. I specialize in websites and desktop apps,
                    transforming ideas into sleek, interactive, and user-friendly experiences. 
                    Join me on a journey where innovation meets functionality.
        </p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(`<strong style="color: #3B82F6">PASSIONATE DEVELOPER.</strong>`)
                    .deleteAll(1)
                    .typeString(`<strong style="color: #3B82F6">CREATIVE PROBLEM SOLVER.</strong>`)
                    .deleteAll(1)
                    .typeString(`<strong style="color: #3B82F6">TECH ENTHUSIASTS.</strong>`)
                    .deleteAll(1)
                    .start();
                }}
                options={{
                    loop: true
                }}
            />
    </div>
  )
}

export default Info